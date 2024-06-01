import { getByTestId } from "@testing-library/dom";

describe("Sample 1 integration test suites", () => {
  it("should display 'Hello Victor'", () => {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
    <div id="root">
    <h1 data-testid="hello">Hello Victor</h1>
    </div>
    `;

    expect(getByTestId(wrapper, "hello").textContent).toEqual("Hello Victor");
  });
});
