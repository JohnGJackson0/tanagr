import React, { useEffect } from "react";
import { Text, View } from "react-native";

export function Posts(): JSX.Element {
  const response = async (): Promise<void> => {
    const response = await fetch(
      'https://pj8vd70mli.execute-api.us-east-1.amazonaws.com/dev/posts'
    );
    const json = await response.json();
    console.log(json);
  };

  useEffect(()=> {
    response().catch(() => {});
  }, []);

  return (
    <View/>
  );
}
