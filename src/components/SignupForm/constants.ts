import { Gender } from "./models";

export const MIN_AGE = 18;

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  gender: Gender.Male,
  age: "",
  nationality: "",
  email: "",
  password: "",
  passwordConfirm: "",
  terms: false,
};

export const NATIONALITIES = ["danish", "english", "swedish"];
