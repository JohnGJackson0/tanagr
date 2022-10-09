import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { signUpConfig } from "./auth/signUpConfig";
import { theme } from "./auth/theme";
import { Button } from "./ui";
import { Auth } from "aws-amplify";

function App() {
  return (
    <View style={styles.container}>
      <Button
        title="log out"
        onPress={async () => {
          await Auth.signOut();
        }}
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
