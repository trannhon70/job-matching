export type FormatErrorResponse = {
  response: {
    data: ErrorData;
    status: number;
  };
};

export type ErrorData = {
  status: string;
  code: number;
  message: string;
  success: boolean;
};
