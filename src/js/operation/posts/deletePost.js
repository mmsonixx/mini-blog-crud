import { deletePostsApi } from "../../api/posts/deletePostsApi";
import { renderPosts } from "./renderPosts";

export const deletePost = async (id) => {
  try {
    const response = await deletePostsApi(id);

    if (!response.ok) {
      throw new Error("Failed to delete the post");
    }

    await renderPosts();
  } catch (error) {
    console.error("Error deleting:", error);
  }
};
