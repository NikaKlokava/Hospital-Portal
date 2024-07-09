import { PageData } from '../about/about.model';

export const ABOUT_PAGE_DATA: PageData = {
  pageTitle: 'About Us',
  bannerUrl: `url('https://raw.githubusercontent.com/NikaKlokava/hospital-portal-assets/main/images/about-us-banner.png')`,
  photo:
    'https://raw.githubusercontent.com/NikaKlokava/hospital-portal-assets/main/images/about-us-doctor.png',
  priorities: [
    'A Passion for Healing',
    'All our best',
    'Always Caring',
    '5-Star Care',
    'Believe in Us',
    'A Legacy of Excellence',
  ],
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iste
      accusamus natus, laborum earum expedita molestiae. Architecto facilis
      delectus voluptatem quaerat, laborum suscipit et voluptate dignissimos
      laudantium odit corporis mollitia!`,
};

export const DOCTORS_PAGE_DATA = {
  page: 'Doctors',
  bannerUrl: `url('https://raw.githubusercontent.com/NikaKlokava/hospital-portal-assets/main/images/doctors-banner.png')`,
};

export const TABLE_HEADERS = [
  'name',
  'specialization',
  'experience',
  'description',
];

export const DOCTORS_PER_PAGE = 6;
export const UNKNOWN_SPECIALITY = 'unknown';
