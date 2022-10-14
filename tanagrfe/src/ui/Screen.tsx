import React from "react";
import { View } from "react-native";

interface BackgroundProps {
  children?: React.ReactNode;
}

export function Screen(props: BackgroundProps): JSX.Element {
  return <View>{props.children}</View>;
}
