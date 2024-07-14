export interface Appointment {
  id: string;
  date: string;
  time: string;
  birthDate: string;
  newPatient: string;
  doctor: string;
  comments: string;
}

type WithNull<T> = {
  [P in keyof T]: T[P] | null;
};

export type AppointmentFormType = WithNull<Appointment>;
