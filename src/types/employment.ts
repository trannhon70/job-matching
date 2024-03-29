import { ManageJobEnum } from "@/enums/admin";

export interface EmploymentType {
  id: number;
  jobTitle: string;
  slug: string;
  company: Company;
  startDate: Date;
  status: number;
  unitCode: string;
  statistical: Statistical[];
  interview: Interview[];
  apply: Apply[];
  manageJob: ManageJob[];
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
  employer: Employer[];
}

export interface Employer {
  name: string;
  email: string;
  phone: null;
}

export interface Interview {
  id: number;
}

export interface ManageJob {
  id: number;
  confirm: Confirm;
  step1: Confirm;
  step2: Confirm;
  step3: Confirm;
  lmia: Confirm;
  currentStep: ManageJobEnum;
}

export interface Confirm {
  date: Date;
  text: string;
  status: boolean;
}

export interface Statistical {
  id: number;
  click: number | null;
  save: number | null;
}

export type ConfirmBody = {
  name: ManageJobEnum;
  status?: boolean;
  text?: string;
};
