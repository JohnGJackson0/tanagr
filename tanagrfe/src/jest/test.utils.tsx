import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render as rntlRender } from "@testing-library/react-native";
import themeStore from "../ui/ui.slice";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function render(
  ui: any,
  {
    // @ts-expect-error
    preloadedState,
    store = configureStore({
      reducer: { themeStore },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rntlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react-native";

export { render };
