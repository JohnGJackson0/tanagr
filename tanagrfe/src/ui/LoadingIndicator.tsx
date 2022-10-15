import React from "react";
import { ActivityIndicator } from "react-native";
import { getTheme } from "./ui.utils";

export function LoadingIndicator(): JSX.Element {
  const theme = getTheme();
  return (
    <ActivityIndicator
      size="large"
      testID="LoadingIndicator"
      color={theme.colors.accent}
    />
  );
}
