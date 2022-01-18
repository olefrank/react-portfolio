export type SignupForm = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  nationality: string;
  terms: boolean;
  gender: Gender;
  password: string;
  passwordConfirm: string;
};

export enum Gender {
  Male = "male",
  Female = "female",
}
