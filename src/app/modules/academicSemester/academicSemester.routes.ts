import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { AcademicSemesterController } from './AcademicSemester.controller';
import { AcademicSemesterValidations } from './academicSemester.validetion';
const router = express.Router();
router.post(
  '/create-academic-semester',
  requestValidation(
    AcademicSemesterValidations.academicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
