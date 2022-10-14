import { PostsDTO } from "../features/feed/posts.types";

export const StubPostDTOHappyPath: PostsDTO = {
  Count: 3,
  Items: [
    {
      createdAt: 1237628746,
      updatedAt: 1237628746,
      id: "stubed-post-id-1",
      post: "fake-1",
    },
    {
      createdAt: 1237628746,
      updatedAt: 1237628746,
      id: "stubed-post-id-2",
      post: "fake-2",
    },
    {
      createdAt: 1237628746,
      updatedAt: 1237628746,
      id: "stubed-post-id-3",
      post: "fake-3",
    },
  ],
};
