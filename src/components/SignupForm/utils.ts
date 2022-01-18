import { FormikHelpers } from "formik";
import { SignupForm } from "./models";

export function onSubmit(
  values: SignupForm,
  { setSubmitting }: FormikHelpers<any>
): void | Promise<void> {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}
