import { ErrorMessage, Form, Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import validationSchema from "./validation";
import { INITIAL_VALUES, MIN_AGE, NATIONALITIES } from "./constants";
import { Gender } from "./models";
import Select from "../Select";
import { onSubmit } from "./utils";

export default function SignupForm() {
  return (
    <div className="flex flex-col w-10/12">
      <h1 className="text-center">Signup here</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          isSubmitting,
          errors,
          touched,
        }) => (
          <Form
            className="grid grid-cols-[200px_1fr] gap-4 justify-items-end"
            noValidate
          >
            <label htmlFor="firstName">First Name</label>
            <div className="w-full">
              <Input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                fullWidth
                autoFocus
              />
              <ErrorMessage
                name="firstName"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>
            <label htmlFor="lastName">Last Name</label>
            <div className="w-full">
              <Input
                id="lastName"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                fullWidth
              />
              <ErrorMessage
                className="text-red-400 italic text-sm"
                name="lastName"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>

            <label>Gender</label>
            <div className="flex justify-evenly w-[100%]">
              <div className="flex gap-2 items-center">
                <Input
                  type="radio"
                  id="male"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.gender}
                  checked
                />
                <label htmlFor="male">{Gender.Male}</label>
              </div>

              <div className="flex gap-2 items-center">
                <Input
                  type="radio"
                  id="female"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={Gender.Female}
                />
                <label htmlFor="female">{Gender.Female}</label>
              </div>
            </div>

            <label htmlFor="age">Age</label>
            <div className="w-full">
              <Input
                id="age"
                name="age"
                type="number"
                min={MIN_AGE}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                fullWidth
              />
              <ErrorMessage
                className="text-red-400 italic text-sm"
                name="age"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>

            <label htmlFor="nationality">Nationality</label>
            <div className="w-full">
              <Select
                id="nationality"
                name="nationality"
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              >
                <option value="" />
                {NATIONALITIES.map((nationality) => (
                  <option key={nationality} value={nationality}>
                    {nationality}
                  </option>
                ))}
              </Select>
              <ErrorMessage
                className="text-red-400 italic text-sm"
                name="nationality"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>

            <label htmlFor="email">Email Address</label>
            <div className="w-full">
              <Input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                fullWidth
              />
              <ErrorMessage
                className="text-red-400 italic text-sm"
                name="email"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="w-full">
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                fullWidth
              />
              <ErrorMessage
                className="text-red-400 italic text-sm"
                name="password"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>

            <label htmlFor="passwordConfirm">Confirm password</label>
            <div className="w-full">
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
                fullWidth
              />
              <ErrorMessage
                className="text-red-400 italic text-sm"
                name="passwordConfirm"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>

            <div className="col-span-full w-full flex flex-col items-end">
              <div className="flex items-center gap-4">
                <label htmlFor="terms">Accept our terms of service</label>
                <Input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.terms}
                />
              </div>
              <ErrorMessage
                className="text-red-400 italic text-sm"
                name="terms"
                render={(msg) => (
                  <p
                    className="text-red-400 italic text-sm mt-1 mb-0"
                    role="alert"
                  >
                    {msg}
                  </p>
                )}
              />
            </div>

            <div className="col-span-full">
              <Button
                type="submit"
                disabled={isSubmitting}
                showSpinner={isSubmitting}
              >
                Sign up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
