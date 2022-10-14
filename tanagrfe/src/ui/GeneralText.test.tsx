import React from "react";
import { render } from "@testing-library/react-native";
import { GeneralText } from "./GeneralText";

describe("General Text", () => {
  it("shows up", () => {
    const { getByText } = render(<GeneralText>FakeMessage</GeneralText>);
    expect(getByText(/FakeMessage/i)).toBeTruthy();
  });
});
