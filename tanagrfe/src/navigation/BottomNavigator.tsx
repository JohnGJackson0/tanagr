import * as React from "react";
import { Feed } from "../features/feed";
import { Profile } from "../features/profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./TabBar";
import { getTheme } from "../ui/ui.utils";
import { NavigatorScreenParams } from "@react-navigation/native";

export interface RootStackParamList {
  Home: NavigatorScreenParams<undefined>;
  Profile: undefined;
}

const Tab = createBottomTabNavigator();

export function BottomNavigator(): JSX.Element {
  const theme = getTheme();

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.white,
      }}
    >
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
