import React from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "./ui.utils";

interface BackgroundProps {
  children?: React.ReactNode;
}

export function Screen(props: BackgroundProps): JSX.Element {
  const theme = getTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
