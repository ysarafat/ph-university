/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources } from '../interface/error';

export const handleDuplicateError = (err: any) => {
  const statusCode = 400;
  const matchError = err.message.match(/"([^"]*)"/);
  const extractedErrMessage = matchError && matchError[1];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedErrMessage} is already exist!`,
    },
  ];

  return {
    statusCode,
    message: 'Validation error',
    errorSources,
  };
};
