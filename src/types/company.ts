export interface CompanyType {
  id: number;
  companyName: string;
  foundation: null | string;
  employee: null | string;
  fileLogo: null | string;
  information: null | string;
  address: null | string;
  history: null | string;
  slug: string;
  webPage: null | string;
  country: Country | null;
  phone: string;
  createdAt: string;
  isActivate: boolean;
}

export interface Country {
  id: number;
  countryName: string;
  code: string;
}

export interface DetailCompanyType {
  id: number;
  companyName: string;
  foundation: string;
  employee: string;
  fileLogo: string;
  information: string;
  address: string;
  history: string;
  slug: string;
  webPage: string;
  industry: Industry;
  employer: Employer[];
  review: Review[];
}

export interface Employer {
  name: string;
}

export interface Industry {
  id: number;
  industryName: string;
}

export interface Review {
  id: number;
  content: string;
  createdAt: Date;
  user: User;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface IListCompany {
  address: string,
  businessLicense: string,
  companyName: string,
  createdAt: string,
  description: string,
  email: string,
  employee: string,
  fileBusiness: string,
  fileLogo: string,
  foundation: string,
  history: string,
  id: number,
  information: string,
  isActivate: boolean,
  isVerify: boolean,
  periodEnd: string,
  periodStart: string,
  phone: string,
  slug: string,
  webPage: string,
}