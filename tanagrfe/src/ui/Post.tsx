import React from "react";
import { GeneralText } from "./GeneralText";

interface NormalizedPost {
  postContent?: string;
}

export function Post(props: NormalizedPost): JSX.Element {
  return <GeneralText>{props.postContent}</GeneralText>;
}

/*
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
*/
