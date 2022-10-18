import React from "react";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { getTheme } from "../ui/ui.utils";

export function HomeOutline(): JSX.Element {
  const theme = getTheme();
  return (
    <Ionicons name="home-outline" size={34} color={theme.colors.accent}/>
  );
}

export function HomeFilled(): JSX.Element {
  const theme = getTheme();
  return (
    <Ionicons name="home" size={34} color={theme.colors.accent}/>
  );
}


export function UserOutline(): JSX.Element {
  const theme = getTheme();
  return (
    <FontAwesome5 name="user" size={35} color={theme.colors.accent}/>
  );
}

export function UserFilled(): JSX.Element {
  const theme = getTheme();
  return (
    <FontAwesome5 name="user-alt" size={35} color={theme.colors.accent}/>
  );
}