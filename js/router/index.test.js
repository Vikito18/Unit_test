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

  it("should display facade-details page", async () => {
    document.body.innerHTML = `
    <div id="root"></div>`;

    document.location = "/#/facade-details";

    await router();

    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur #7"
    );
  });

  it("should display add-sensor page", async () => {
    document.body.innerHTML = `
    <div id="root"></div>`;

    document.location = "/#/add-sensor";

    await router();

    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur"
    );
  });
});
