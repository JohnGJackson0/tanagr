import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ThemeState } from "./ui.slice";

export const getTheme = (): ThemeState => {
  return useSelector((state: RootState) => state.themeStore);
};
