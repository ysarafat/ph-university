import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  requestValidation(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.createAcademicFaculty,
);
router.get('/', AcademicFacultyController.getAcademicFaculties);
router.get('/:facultyId', AcademicFacultyController.getAcademicFaculty);
router.patch(
  '/:facultyId',
  requestValidation(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.updateAcademicFaculty,
);
export const AcademicFacultyRoutes = router;
