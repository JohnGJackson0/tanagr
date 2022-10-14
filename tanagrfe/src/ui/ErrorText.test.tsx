import React from "react";
import { render } from "@testing-library/react-native";
import { ErrorText } from "./ErrorText";

describe("Error Text", () => {
  it("shows up", () => {
    const { getByText } = render(<ErrorText>FakeMessage</ErrorText>);
    expect(getByText(/FakeMessage/i)).toBeTruthy();
  });
});
