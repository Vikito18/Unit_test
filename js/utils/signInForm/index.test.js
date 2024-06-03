/**
 * @jest-environment jsdom
 */

import { handleSignInForm } from ".";
import { USER_EMAIL, USER_PASSWORD } from "../../constants";

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";

describe("signIn integrations test suites", () => {
  it("should display an error message", () => {
    document.body.innerHTML = `
    <div id="root"></div>`;

    USER_EMAIL === "vik@gmail.com";
    USER_PASSWORD === "psg";

    handleSignInForm();

    expect(
      getByTestId(document.body, "user-email-error-msg")
    ).toHaveTextContent("L'e-mail n'est pas correct");
  });
});
