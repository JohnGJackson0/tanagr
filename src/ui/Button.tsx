import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

interface ButtonParam {
  onPress: (event: GestureResponderEvent) => void;
  title: String;
}

// function has small performance benefit over arrow
export function Button(props: ButtonParam) {
  const { onPress, title } = props;
  return (
    <Pressable {...props} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}