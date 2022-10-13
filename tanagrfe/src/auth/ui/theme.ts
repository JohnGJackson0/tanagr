// @ts-expect-error
import { AmplifyTheme } from "aws-amplify-react-native";

export const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    // custom styles
  },
};
