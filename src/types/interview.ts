export interface InterViewType {
  id: number;
  title: string;
  date: Date;
  estimateDate: Date;
  endDate: Date;
  hour: string;
  minute: string;
  estimateHour: null;
  estimateMinute: null;
  endHour: null;
  endMinute: null;
  periodTime: string;
  timeZone: number;
  roomId: string;
  status: boolean;
  user: User;
  job: Job;
  estimatePeriodTime: string;
  isActivate: boolean;
}

export interface Job {
  jobTitle: string;
  company: Company;
}

export interface Company {
  companyName: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: null | string;
  phone: null | string;
  isVerifyEmail: boolean;
  emailVerifyCode: null | string;
  createdAt: Date;
}
