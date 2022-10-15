import React from "react";
import { GeneralText } from "../../ui/GeneralText";
import { PostItem } from "./posts.types";

export function FeedItem({
  item,
}: {
  item: PostItem | undefined;
}): JSX.Element {
  return <GeneralText>{item?.post}</GeneralText>;
}
