import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { Feed } from "./Feed";
import { StubPostDTOHappyPath } from "../../jest/PostsDTO.stub";
import * as api from "../../lib/api";

describe("Feed", () => {
  describe("sad path", () => {
    beforeEach(() => {
      jest.spyOn(api, "getRequest").mockRejectedValue("test");
    });

    it("shows error", async () => {
      const { queryByText, getByText } = render(<Feed />);
      await waitFor(() => {
        expect(queryByText("test")).toBeFalsy();
      });

      expect(getByText("test")).toBeTruthy();
    });
  });
  describe("happy path", () => {
    beforeEach(async () => {
      const mockFunc = async (): Promise<any> =>
        ({
          data: StubPostDTOHappyPath,
        } as any);

      jest.spyOn(api, "getRequest").mockImplementationOnce(mockFunc);
    });

    it("shows the elements", async () => {
      const { getByText, queryByText, queryByTestId } = render(<Feed />);
      await waitFor(() => {
        expect(queryByTestId("LoadingIndicator")).toBeFalsy();
        expect(getByText("fake-1")).toBeTruthy();
      });

      expect(getByText("fake-2")).toBeTruthy();
      expect(getByText("fake-3")).toBeTruthy();
      expect(queryByText("fake-4")).toBeFalsy();
    });

    it("loads and stops loading", async () => {
      const { getByTestId, queryByTestId } = render(<Feed />);

      expect(getByTestId("LoadingIndicator")).toBeTruthy();

      await waitFor(() => {
        expect(queryByTestId("LoadingIndicator")).toBeFalsy();
      });

      expect(queryByTestId("LoadingIndicator")).toBeFalsy();
    });
  });
});
