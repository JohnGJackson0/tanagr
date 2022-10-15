import { StatusBar } from "expo-status-bar";
import React from "react";
// @ts-expect-error
import { withAuthenticator } from "aws-amplify-react-native";
import { signUpConfig } from "./auth/ui/signUpConfig";
import { Button, Screen } from "./ui";
import { signOut } from "./auth/lib/auth.utils";
import { theme } from "./auth/ui/theme";
import { Feed } from "./features/feed";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const persistor = persistStore(store);

const clearStorage = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  AsyncStorage.getAllKeys()
    .then(async (keys) => await AsyncStorage.multiRemove(keys))
    .then(() => alert("success"));
};

function App(): JSX.Element {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Screen>
          <StatusBar style="auto" />
          <Feed />
          <Button title="clear storage" onPress={clearStorage} />
          <Button title="log out" onPress={signOut} />
        </Screen>
      </Provider>
    </PersistGate>
  );
}

export default withAuthenticator(App, { signUpConfig, theme });
