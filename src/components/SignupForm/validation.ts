import * as Yup from "yup";

export const MIN_AGE = 18;

export default Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  age: Yup.number()
    .min(MIN_AGE, `Must be ${MIN_AGE} or above to signup`)
    .required("Required"),
});
