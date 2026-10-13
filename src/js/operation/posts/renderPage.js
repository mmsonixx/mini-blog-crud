import { renderPosts } from "./renderPosts";
import { addPost } from "./addNewPost";
import { startModalEvents } from "./addPostModal";

const startEvents = () => {
  const form = document.querySelector("[data-addPost-form]");
  const closeModal = startModalEvents();

  form.addEventListener("submit", (event) => {
    addPost(event, closeModal);
  });
};

export const renderPage = async () => {
  await renderPosts();
  await startEvents();
};