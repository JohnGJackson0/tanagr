import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";
import { render } from "@testing-library/react-native";
describe("Loading Indicator", () => {
  it("shows up", () => {
    const { getByTestId } = render(<LoadingIndicator />);

    expect(getByTestId("LoadingIndicator")).toBeTruthy();
  });
});
