export interface PostsDTO {
  Count: number;
  Items: PostItem[];
}

export interface PostItem {
  createdAt: number;
  updatedAt: number;
  id: string;
  post: string;
}
