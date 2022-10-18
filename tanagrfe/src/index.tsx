import { StatusBar } from "expo-status-bar";
import React from "react";
// @ts-expect-error
import { withAuthenticator } from "aws-amplify-react-native";
import { signUpConfig } from "./auth/ui/signUpConfig";
import { Screen } from "./ui";
import { theme } from "./auth/ui/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./navigation/BottomNavigator";

export const persistor = persistStore(store);

function App(): JSX.Element {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <Screen>
            <StatusBar style="auto" />
            <BottomNavigator />
          </Screen>
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
}

export default withAuthenticator(App, { signUpConfig, theme });
