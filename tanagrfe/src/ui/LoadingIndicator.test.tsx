import React from "react";
import { render } from "../jest/test.utils";
import { LoadingIndicator } from "./LoadingIndicator";
describe("Loading Indicator", () => {
  it("shows up", () => {
    const { getByTestId } = render(<LoadingIndicator />);

    expect(getByTestId("LoadingIndicator")).toBeTruthy();
  });
});
