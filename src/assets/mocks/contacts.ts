export interface Contact {
  img: string;
  title: string;
  description_1: string;
  description_2: string;
}

export const CONTACTS: Contact[] = [
  {
    img: 'assets/images/call.svg',
    title: 'Emergency',
    description_1: '(237) 681-812-255',
    description_2: '(237) 666-331-894',
  },
  {
    img: 'assets/images/location.svg',
    title: 'Location',
    description_1: '0123 Some place',
    description_2: '9876 Some country',
  },
  {
    img: 'assets/images/email.svg',
    title: 'Email',
    description_1: 'first@gmail.com',
    description_2: 'second@gmail.com',
  },
  {
    img: 'assets/images/clock.svg',
    title: 'Working Hours',
    description_1: 'Mon-Sat 09:00-18:00',
    description_2: 'Sunday Emergency only',
  },
];
