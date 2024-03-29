export enum Token {
  ACCESS_TOKEN = "ACCESS_TOKEN",
}

export enum EmployerStatus {
  Pending = 0,
  Approval = 1,
  Suspended = 2,
}

export enum JobPostingStatus {
  Close = 0,
  On_Going = 1,
  Suspended = 2,
}

export enum EmploymentStep {
  Step_1 = 1,
  Step_2 = 2,
  Step_3 = 3,
  Step_4 = 4,
  Step_5 = 5,
}

export enum EmployeeType {
  Profile_created = "true",
  Profile_not_created = "false",
}

export enum CorporateUserType {
  Master = 1,
  Member = 2,
}

export enum InterviewType {
  Scheduled = 0,
  Previous = 1,
}

export enum EmployerLevel {
  Master = 1,
  HR = 2,
  Interviewer = 3,
}

export enum ApplicantStatus {
  Hired = 0,
  Interview = 1,
  Refuse = 2,
}

export enum ManageJobEnum {
  confirm = "confirm",
  step1 = "step1",
  step2 = "step2",
  step3 = "step3",
  lmia = "lmia",
}

export enum ActiveEum {
  Active = "true",
  Inactive = "false",
}
