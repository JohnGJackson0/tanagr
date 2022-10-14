import React from "react";
import { Text } from "react-native";
import { PostItem } from "./posts.types";

export function Post({ item }: { item: PostItem | undefined }): JSX.Element {
  return <Text>{item?.post}</Text>;
}
