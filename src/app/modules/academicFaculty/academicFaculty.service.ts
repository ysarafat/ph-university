import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

// create academic faculty
const createAcademicFaculty = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

// get all academic faculty
const getAcademicFaculties = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
// get  academic faculty
const getAcademicFaculty = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

// update academic faculty
const updateAcademicFaculty = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const AcademicFacultyServices = {
  createAcademicFaculty,
  getAcademicFaculties,
  getAcademicFaculty,
  updateAcademicFaculty,
};
