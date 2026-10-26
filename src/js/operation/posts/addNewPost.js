import { addPostsApi } from "../../api/posts/addPostsApi";
import { renderPosts } from "./renderPosts";

export const addPost = async (event, closeModal) => {
  event.preventDefault();

  const form = event.target;
  const elements = form.elements;

  const post = {
    title: elements.title.value,
    img: elements.img.value,
    description: elements.description.value,
    category: elements.category.value,
  };

  try {
    await addPostsApi(post);
    await renderPosts();

    form.reset();
    closeModal();
  } catch (error) {
    console.error("Failed to add post:", error);
  }
};
