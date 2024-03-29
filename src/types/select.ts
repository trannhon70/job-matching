export interface CountryType {
  id: number;
  countryName: string;
  code: null | string;
}

export type LooseType = {
  [key: string]: string;
};
