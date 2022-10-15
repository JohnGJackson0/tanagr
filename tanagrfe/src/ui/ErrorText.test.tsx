import React from "react";
import { render } from "../jest/test.utils";
import { ErrorText } from "./ErrorText";

describe("Error Text", () => {
  it("shows up", () => {
    const { getByText } = render(<ErrorText>FakeMessage</ErrorText>);
    expect(getByText(/FakeMessage/i)).toBeTruthy();
  });
});
