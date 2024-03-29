export interface EmployeeType {
  id: number;
  firstName: string;
  lastName: null | string;
  phone: null | string;
  streetName: null | string;
  createdAt: Date;
  country: Country | null;
  email: string;
}

export interface Country {
  id: number;
  countryName: string;
  code: string;
}

export interface DetailEmployeeType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  phone: string;
  isVerifyEmail: boolean;
  emailVerifyCode: string;
  certificate: Certificate[];
  createdAt: Date;
  openToWork: boolean;
  postalCode: number;
  resume: string;
  streetName: string;
  userTechnical: UserTechnical[];
  country: Country;
  province: Province;
  userSchool: UserSchool[];
  experience: Experience[];
}

export interface Certificate {
  id: number;
  nameFile: string;
  file: string;
  link: null | string;
  monthStartCer: string;
  monthEndCer: null | string;
  yearStartCer: string;
  yearEndCer: null | string;
}

export interface Country {
  id: number;
  countryName: string;
  code: string;
}

export interface Experience {
  id: number;
  monthStart: number;
  monthEnd: number;
  yearStart: number;
  yearEnd: number;
  description: string;
  address: string;
  companyName: null;
  positionName: null;
  provinceName: null;
  company: Company;
  position: Position;
  province: Province;
  country: Country;
}

export interface Company {
  id: number;
  companyName: string;
  foundation: null;
  employee: null;
  fileLogo: null;
  information: null;
  address: null;
  history: null;
  slug: string;
  webPage: null;
}

export interface Position {
  id: number;
  positionName: string;
}

export interface Province {
  id: number;
  provinceName: string;
}

export interface UserSchool {
  id: number;
  monthStartEdu: number;
  monthEndEdu: number;
  yearStartEdu: number;
  yearEndEdu: number;
  schoolName: null;
  majorName: null;
  country: Country;
  province: Province;
  levelSchool: LevelSchool;
  major: Major;
  school: School;
}

export interface LevelSchool {
  id: number;
  levelName: string;
}

export interface Major {
  id: number;
  majorName: string;
}

export interface School {
  id: number;
  schoolName: string;
}

export interface UserTechnical {
  id: number;
  skillName: null | string;
  rate: number;
  description: string;
  technical: Technical | null;
}

export interface Technical {
  id: number;
  technicalName: string;
}
