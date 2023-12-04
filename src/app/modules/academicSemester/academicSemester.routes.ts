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
router.get('/semesters', AcademicSemesterController.getAcademicSemesters);
router.get('/:semesterId', AcademicSemesterController.getAcademicSemester);
router.patch(
  '/:semesterId',
  requestValidation(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);
export const AcademicSemesterRoutes = router;
