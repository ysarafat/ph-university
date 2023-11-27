import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { StudentValidations } from '../student/student.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  requestValidation(StudentValidations.studentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
