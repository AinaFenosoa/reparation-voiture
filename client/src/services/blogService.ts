import { blogAPI } from "../api/blogAPI";
import type { Post } from "../types/blog";

interface PaginatedPostResponse {
  message: string;
  data: Post[];
  meta: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

export const blogService = {
  getAllPosts: async (): Promise<Post[]> => {
    const response = await blogAPI.get<PaginatedPostResponse>("/blog/posts");
    return response.data.data; 
  },

  getFeaturedPosts: async (): Promise<Post[]> => {
    const response = await blogAPI.get<any>("/blog/posts/featured");
    return response.data.data ? response.data.data : response.data;
  },

  getLatestPosts: async (): Promise<Post[]> => {
    const response = await blogAPI.get<any>("/blog/posts/latest");
    return response.data.data ? response.data.data : response.data;
  },

  getPostBySlug: async (slug: string): Promise<Post> => {
    const response = await blogAPI.get<any>(`/blog/posts/${slug}`);
    return response.data.data ? response.data.data : response.data;
  },
};