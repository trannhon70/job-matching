export interface EmployerType {
  id: number;
  email: string;
  name: string;
  phone: null;
  isOne: boolean;
  isActive: boolean;
  isCompany: boolean;
  status: number;
  level: Level[];
  company: Company;
  country: Country | null;
  createdAt: string;
  address: string;
}

export interface Company {
  isActivate: boolean;
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
}

export interface Country {
  id: number;
  countryName: string;
  code: string;
}

export interface Level {
  levelName: string;
  id: number;
}
