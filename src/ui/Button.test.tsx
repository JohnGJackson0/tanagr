import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Button } from "./button";

it("calls the callback", () => {
  const mockPress = jest.fn();
  const { getByText } = render(<Button onPress={mockPress} title={"test"} />);

  fireEvent.press(getByText(/test/));
  expect(mockPress).toHaveBeenCalledTimes(1);
});
