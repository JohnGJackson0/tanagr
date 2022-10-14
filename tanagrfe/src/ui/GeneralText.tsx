import React from "react";
import { Text } from "react-native";

interface GeneralTextParams {
  children?: string;
}

export function GeneralText(props: GeneralTextParams): JSX.Element {
  return <Text>{props.children}</Text>;
}
