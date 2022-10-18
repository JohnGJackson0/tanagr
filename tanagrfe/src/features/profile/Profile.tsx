import React from "react";
import { AsyncStorage } from "react-native";
import { Screen, GeneralText, Button } from "../../ui/";
import { signOut } from "../../auth/lib/auth.utils";

const clearStorage = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  AsyncStorage.getAllKeys()
    .then(async (keys) => await AsyncStorage.multiRemove(keys))
    .then(() => alert("success"));
};

export function Profile(): JSX.Element {
  return (
    <Screen>
      <GeneralText>Profile Screen</GeneralText>
      <Button title="clear storage" onPress={clearStorage} />
      <Button title="log out" onPress={signOut} />
    </Screen>
  );
}
