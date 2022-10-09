import React from "react";

// @ts-ignore
import { AmplifyTheme } from "aws-amplify-react-native";

export const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    // custom styles
  },
};
