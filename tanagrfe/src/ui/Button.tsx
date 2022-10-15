import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { getTheme } from "./ui.utils";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonParam {
  onPress: Function;
  title: String;
}

export function Button(props: ButtonParam): JSX.Element {
  const { onPress, title } = props;
  const theme = getTheme();
  return (
    <Pressable {...props} onPress={() => onPress()}>
      <LinearGradient
        colors={[
          theme.colors.buttonGradientOne,
          theme.colors.buttonGradientTwo,
        ]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.buttonGradient}
      >
        <Text style={[styles.text, { color: theme.colors.text }]}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonGradient: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
