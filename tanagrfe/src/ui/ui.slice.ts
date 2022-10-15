import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  colors: Colors;
  isDark: boolean;
}

interface Colors {
  background: string;
  text: string;
  buttonGradientOne: string;
  buttonGradientTwo: string;
  positives: string;
  negatives: string;
  grayDark: string;
  grayLight: string;
  accent: string;
  accentTwo: string;
  accentThree: string;
  white: string;
}

export const initialState: ThemeState = {
  colors: {
    background: "rgb(1,3,18)",
    text: "rgb(255,255,255)",
    buttonGradientOne: "rgb(245,45,171)",
    buttonGradientTwo: "rgb(249,0,58)",
    positives: "rgb(58,240,196)",
    negatives: "rgb(254,98,85)",
    grayDark: "rgb(37,37,48)",
    grayLight: "rgb(67,67,80)",
    accent: "rgb(64,63,252)",
    accentTwo: "rgb(255,152,63)",
    accentThree: "rgb(179,230,241)",
    white: "rgb(255,255,255)",
  },
  isDark: true,
};

interface UpdateThemeAction {
  payload: UpdateThemePayload;
}

interface UpdateThemePayload {
  isDark: boolean;
  colors: Colors;
}

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: UpdateThemeAction) => {
      state.colors = {
        ...action.payload.colors,
      };
      state.isDark = action.payload.isDark;
    },
  },
});

export const { updateTheme } = ThemeSlice.actions;

const themeStore = ThemeSlice.reducer;

export default themeStore;
