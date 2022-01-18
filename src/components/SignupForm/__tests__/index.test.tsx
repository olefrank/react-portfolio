import SignupForm from "..";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as helpers from "../utils";

describe("SignupForm", () => {
  test("should validate inputs after being touched", async () => {
    render(<SignupForm />);

    // Enter last name after first name field has been focused
    userEvent.type(screen.getByLabelText(/Last Name/), "lastname");

    await waitFor(() => {
      expect(screen.getByRole(/alert/)).toBeInTheDocument();
    });
  });

  test("should show error messages for each field", async () => {
    render(<SignupForm />);

    // click submit button after first name field has been focused
    userEvent.click(screen.getByRole("button", { name: /Sign up/ }));

    await waitFor(() => {
      expect(screen.getAllByRole(/alert/)).toHaveLength(8);
    });
  });

  test("should not be able to submit form contains invalid values", async () => {
    const onSubmitMock = jest.spyOn(helpers, "onSubmit");

    render(<SignupForm />);

    // click submit button after first name field has been focused
    userEvent.click(screen.getByRole("button", { name: /Sign up/ }));

    // expect submit not to have been called
    await waitFor(() => {
      expect(onSubmitMock).not.toHaveBeenCalled();
    });
  });

  test("should submit form if form is valid", async () => {
    const onSubmitMock = jest.spyOn(helpers, "onSubmit");
    const firstName = "firstName";
    const lastName = "lastName";
    const age = 18;
    const gender = "male";
    const email = "me@email.com";
    const password = "1234";
    const nationality = "danish";

    render(<SignupForm />);

    userEvent.type(
      screen.getByRole("textbox", { name: /First Name/ }),
      firstName
    );

    userEvent.type(
      screen.getByRole("textbox", { name: /Last Name/ }),
      lastName
    );

    userEvent.type(
      screen.getByRole("spinbutton", { name: /Age/ }),
      String(age)
    );

    userEvent.type(screen.getByRole("textbox", { name: /Email/ }), email);

    userEvent.type(screen.getByLabelText(/Password/), password);
    userEvent.type(screen.getByLabelText(/Confirm password/), password);

    userEvent.selectOptions(screen.getByRole("combobox"), nationality);

    userEvent.click(
      screen.getByRole("checkbox", { name: /Accept our terms of service/ })
    );

    // click submit button after first name field has been focused
    userEvent.click(screen.getByRole("button", { name: /Sign up/ }));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        {
          age,
          email,
          firstName,
          gender,
          lastName,
          nationality,
          password,
          passwordConfirm: password,
          terms: true,
        },
        expect.anything()
      );
    });
  });

  test("should show error if password fields doesn't match", async () => {
    render(<SignupForm />);

    userEvent.type(screen.getByLabelText(/Password/), "1234");
    userEvent.type(screen.getByLabelText(/Confirm password/), "abcd");

    // click submit button after first name field has been focused
    userEvent.click(screen.getByRole("button", { name: /Sign up/ }));

    await waitFor(() => {
      expect(screen.getByText(/Passwords do not match/)).toBeInTheDocument();
    });
  });
});
