import React from "react";
import { FlatList } from "react-native";
import { PRE_PROD_BASE_URL } from "../../app.const";
import useFetch from "../../hooks/useFetch";
import { PostsDTO } from "./posts.types";
import { Post } from "./posts";
import { ErrorText, Screen, LoadingIndicator } from "../../ui/";

export function Feed(): JSX.Element {
  const { data, isLoading, isError, errorMessage } = useFetch<PostsDTO>(
    `${PRE_PROD_BASE_URL}/posts`
  );

  const shouldDisplayFeed = (): boolean => {
    return !isLoading && !isError;
  };

  return (
    <Screen>
      {isError && <ErrorText>{errorMessage}</ErrorText>}
      {isLoading && <LoadingIndicator />}
      {shouldDisplayFeed() && (
        <FlatList
          testID="FeedContent"
          data={data?.Items}
          renderItem={Post}
          keyExtractor={(item) => item.id}
        />
      )}
    </Screen>
  );
}
