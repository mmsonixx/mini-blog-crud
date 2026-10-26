import { renderPosts } from "./renderPosts";
import { addPost } from "./addNewPost";
import { startModalEvents } from "./addPostModal";
import { startEditMode } from "./editMode";
import { deletePost } from "./deletePost";
import { startPostEditing } from "./editPost";

const startEvents = () => {
   const form = document.querySelector("[data-addPost-form]");
  const closeModal = startModalEvents();

  startEditMode();
  startPostEditing();

  form.addEventListener("submit", (event) => {
    addPost(event, closeModal);
  });

  document.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".posts__delete");

    if (!deleteBtn) return;

    const postItem = deleteBtn.closest(".posts__item");
    if (!postItem) return;

    deletePost(postItem.dataset.postId);
  });
};

export const renderPage = async () => {
  await renderPosts();
  await startEvents();
};