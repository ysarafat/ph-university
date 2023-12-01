import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { StudentControllers } from './student.controller';
import { StudentValidations } from './student.validation';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);
router.patch(
  '/:studentId',
  requestValidation(StudentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:studentId', StudentControllers.deleteStudent);
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
