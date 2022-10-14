import React from "react";
import { Text, FlatList, View } from "react-native";
import { PRE_PROD_BASE_URL } from "../../App.const";
import useFetch from "../../hooks/useFetch";
import { PostsDTO } from "./posts.types";
import { Post } from "./posts";

export function Feed(): JSX.Element {
  const { data, isLoading, isError, errorMessage } = useFetch<PostsDTO>(`${PRE_PROD_BASE_URL}/posts`);

  const shouldDisplayFeed = (): boolean => {
    return !isLoading && !isError
  }

  return (
    <View>
      {isError &&
        <Text>Error displaying feed: {errorMessage}</Text>
      }
      {isLoading &&
        <Text>Loading...</Text>
      }
      {shouldDisplayFeed() &&
        <FlatList
          data={data?.Items}
          renderItem={Post}
          keyExtractor={(item) => item.id}
        />
      }
    </View>
  );
}
