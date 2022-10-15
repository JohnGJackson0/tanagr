import React from "react";
import { StyleSheet, Text } from "react-native";
import { getTheme } from "./ui.utils";

interface ErrorParam {
  children?: string;
}

export function ErrorText({ children }: ErrorParam): JSX.Element {
  const theme = getTheme();
  return (
    <Text style={[styles.text, { color: theme.colors.negatives }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
