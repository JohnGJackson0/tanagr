import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { HomeFilled, HomeOutline, UserFilled, UserOutline } from "../assets/HomeIcon";
import { getTheme } from "../ui/ui.utils";

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
}

const TabBar = ({
  state,
  descriptors,
  navigation,
}: TabBarProps): JSX.Element => {
  const theme = getTheme();
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index: number) => {
        console.log(route);
        const isFocused = state.index === index;

        const onPress = (): void => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.mainItemContainer}>
            <Pressable
              onPress={onPress}
              style={[
                {
                  backgroundColor: theme.colors.background
                },
                isFocused  &&
                {
                  borderTopColor: theme.colors.accent,
                  borderTopWidth: 2
                },
                styles.pressableNav,
              ]}
            >
              <View style={styles.icon}>
                {route.name === 'Home' && isFocused &&
                  <HomeFilled />
                }
                {route.name === 'Home' && !isFocused &&
                  <HomeOutline />
                }
                {route.name === 'Profile' && isFocused &&
                  <UserFilled />
                }
                {route.name === 'Profile' && !isFocused &&
                  <UserOutline />
                }
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row"
  },
  mainItemContainer: {
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 36
  },
  pressableNav: {
    
  },
});

export default TabBar;
