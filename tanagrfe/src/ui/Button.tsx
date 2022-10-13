import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonParam {
  onPress: Function;
  title: String;
}

// function has small performance benefit over arrow
export function Button(props: ButtonParam): JSX.Element {
  const { onPress, title } = props;
  return (
    <Pressable {...props} onPress={() => onPress()}>
      <Text>{title}</Text>
    </Pressable>
  );
}
