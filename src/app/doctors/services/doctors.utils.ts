import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';
import { DOCTORS_PER_PAGE } from 'src/app/shared/constants';
import { SortingTypes } from 'src/app/shared/models/sorting-types.model';

export function filterDoctors(
  doctors: Doctor[],
  searchStr: string,
  specialties: string[],
  sorting: SortingTypes,
  page: number
): {
  paginationSize: number;
  cuttedDoctors: Doctor[];
} {
  const hasSearchFilter = !!searchStr;
  const searchLowerStr = searchStr?.toLowerCase() || '';
  const hasSpecialtiesFilter = !!specialties && specialties.length > 0;

  const filteredDoctors = doctors.filter((doc) => {
    if (hasSearchFilter && !doc.name.toLowerCase().includes(searchLowerStr)) {
      return false;
    }
    if (hasSpecialtiesFilter && !specialties?.includes(doc.specialization)) {
      return false;
    }
    return true;
  });

  if (sorting) {
    switch (sorting) {
      case SortingTypes.name: {
        filteredDoctors.sort((a, b) => a.name.localeCompare(b.name));
        break;
      }
      case SortingTypes.experience: {
        filteredDoctors.sort((a, b) => b.experience - a.experience);
        break;
      }
    }
  }

  const start = page * DOCTORS_PER_PAGE;
  const end = (page + 1) * DOCTORS_PER_PAGE;

  const cuttedDoctors = filteredDoctors.slice(start, end);

  return {
    paginationSize: Math.ceil(filteredDoctors.length / DOCTORS_PER_PAGE),
    cuttedDoctors,
  };
}
