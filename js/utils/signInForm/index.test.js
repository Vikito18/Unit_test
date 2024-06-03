/**
 * @jest-environment jsdom
 */

import { handleSignInForm } from ".";
import SignIn from "../../pages/signIn";

import "@testing-library/jest-dom";
import { getByTestId, getByRole, getByLabelText } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  document.body.innerHTML = SignIn.render;
  handleSignInForm();
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("signIn integrations test suites", () => {
  it("should display an email error message", () => {
    userEvent.type(
      getByLabelText(document.body, "Votre addresse e-mail"),
      "vik@gmail.com"
    );

    userEvent.click(getByRole(document.body, "button"));

    expect(getByTestId(document.body, "user-email-error-msg")).not.toHaveClass(
      "hidden"
    );
  });

  it("should retunr an pwd error message with enmail & not pwd", () => {
    userEvent.type(
      getByLabelText(document.body, "Votre addresse e-mail"),
      "viki@gmail.com"
    );

    userEvent.click(getByRole(document.body, "button"));

    expect(
      getByTestId(document.body, "user-password-error-msg")
    ).not.toHaveClass("hidden");
  });
});
