/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../config';
import AppError from '../errors/appError';
import { handleCastError } from '../errors/handleCastError';
import { handleDuplicateError } from '../errors/handleDuplicateError';
import { handleValidationError } from '../errors/handleValidationError';
import { handleZodError } from '../errors/handleZodError';
import { TErrorSources } from '../interface/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';

  let errorSources: TErrorSources = [
    {
      path: '',
      message: '',
    },
  ];

  // zod validation error
  if (err instanceof ZodError) {
    const formatZodError = handleZodError(err);
    statusCode = formatZodError?.statusCode;
    message = formatZodError?.message;
    errorSources = formatZodError?.errorSources;
  } else if (err?.name === 'ValidationError') {
    const mongooseError = handleValidationError(err);
    statusCode = mongooseError?.statusCode;
    message = mongooseError?.message;
    errorSources = mongooseError?.errorSources;
  } else if (err?.name === 'CastError') {
    const mongooseError = handleCastError(err);
    statusCode = mongooseError?.statusCode;
    message = mongooseError?.message;
    errorSources = mongooseError?.errorSources;
  } else if (err?.code === 11000) {
    const mongooseError = handleDuplicateError(err);
    statusCode = mongooseError?.statusCode;
    message = mongooseError?.message;
    errorSources = mongooseError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }

  // mongoose error

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
