import React from "react";
import { Text } from "react-native";

interface ErrorParam {
  children: string;
}

export function ErrorText({ children }: ErrorParam): JSX.Element {
  return <Text>{children}</Text>;
}
