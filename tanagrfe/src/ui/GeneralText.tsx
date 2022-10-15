import React from "react";
import { StyleSheet, Text } from "react-native";
import { getTheme } from "./ui.utils";

interface GeneralTextParams {
  children?: string;
}

export function GeneralText(props: GeneralTextParams): JSX.Element {
  const theme = getTheme();
  return (
    <Text style={[styles.text, { color: theme.colors.text }]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
