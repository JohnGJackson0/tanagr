import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
// @ts-expect-error
import { withAuthenticator } from "aws-amplify-react-native";
import { signUpConfig } from "./auth/ui/signUpConfig";
import { Button } from "./ui";
import { signOut } from "./auth/lib/auth.utils";
import { theme } from "./auth/ui/theme";

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Button
        title="log out"
        onPress={() => signOut}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    margin: 10,
  },
});

export default withAuthenticator(App, { signUpConfig, theme });
