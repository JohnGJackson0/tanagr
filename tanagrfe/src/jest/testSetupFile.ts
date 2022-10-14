jest.mock("axios", () => ({
  CancelToken: {
    source: () => ({
      cancel: () => {},
    }),
  },
}));
