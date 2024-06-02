/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import { router } from ".";

describe("route integration test suites", () => {
  it("should display signIn page ", async () => {
    document.body.innerHTML = `
    <div id="root"></div>`;

    await router();

    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter"
    );
  });

  it("should display home page", async () => {
    document.body.innerHTML = `
    <div id="root"></div>`;

    document.location = "/#/home";

    await router();

    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });
});
