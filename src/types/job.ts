export interface JobType {
  slug: string;
  id: number;
  jobTitle: string;
  company: Company;
  startDate: Date;
  status: number;
  unitCode: number;
  statistical: Statistical[];
  interview: Interview[];
  apply: Apply[];
  isActivate: boolean;
}

export interface Apply {
  id: number;
  status: string;
}

export interface Company {
  id: number;
  companyName: string;
  phone: string;
  webPage: null | string;
}

export interface Interview {
  id: number;
}

export interface Statistical {
  id: number;
  click: number;
  save: number | null;
}

export interface DetailJobType {
  id: number;
  jobTitle: string;
  summary: string;
  number: null;
  jobType: string;
  currency: string;
  insurance: string;
  skillAbilities: string;
  specificDuties: string;
  duty: string;
  startDate: Date;
  salary: string;
  positionName: string;
  hour: string;
  accommodation: string;
  visa: string;
  vacation: string;
  benefit: string;
  dateRecruitment: Date;
  document: string;
  periodStart: Date;
  periodEnd: Date;
  process: string;
  officer: string;
  other: string;
  status: number;
  isDelete: boolean;
  slug: string;
  totalClick: number;
  totalSave: number;
  position: null;
  apply: Apply[];
  company: Company;
}

export interface Apply {
  id: number;
  status: string;
}

export interface Company {
  id: number;
  companyName: string;
  address: string;
  slug: string;
  webPage: string | null;
  information: string;
  fileLogo: string;
  industry: Industry;
}

export interface Industry {
  industryName: string;
}
