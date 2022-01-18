import * as Yup from "yup";
import { MIN_AGE, NATIONALITIES } from "./constants";
import { Gender } from "./models";

const requiredText = "Required";

export default Yup.object({
  firstName: Yup.string().required(requiredText),
  lastName: Yup.string().required(requiredText),
  age: Yup.number()
    .min(MIN_AGE, `Must be ${MIN_AGE} years or older`)
    .required(requiredText),
  nationality: Yup.string()
    .oneOf(NATIONALITIES, "Not a valid nationality")
    .required(requiredText),
  email: Yup.string().email("Not a valid email").required(requiredText),
  password: Yup.string()
    .min(4, "Must contain at least 4 characters")
    .required(requiredText),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required(requiredText),
  gender: Yup.mixed<Gender>()
    .oneOf(Object.values(Gender))
    .required(requiredText),
  terms: Yup.bool().oneOf([true], "You must accept our terms of service"),
});
