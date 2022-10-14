import React from "react";
import { GeneralText } from "../../ui";
import { PostItem } from "./posts.types";

export function Post({ item }: { item: PostItem | undefined }): JSX.Element {
  return <GeneralText>{item?.post}</GeneralText>;
}
