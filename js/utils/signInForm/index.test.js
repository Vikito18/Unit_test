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
  it("should display an error message", () => {});
});
