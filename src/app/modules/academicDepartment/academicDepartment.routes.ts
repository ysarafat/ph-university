import express from 'express';
import requestValidation from '../../middlewares/requestValidation';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
const router = express.Router();

router.post(
  '/create-academic-department',
  requestValidation(
    AcademicDepartmentValidation.academicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);

router.get('/', AcademicDepartmentController.getAcademicDepartments);
router.get(
  '/:departmentId',
  AcademicDepartmentController.getAcademicDepartment,
);
router.patch(
  '/:departmentId',
  requestValidation(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
