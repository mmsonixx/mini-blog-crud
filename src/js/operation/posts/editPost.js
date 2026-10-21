
import { updatePostsApi } from "../../api/posts/updatePostsApi";
import { renderPosts } from "./renderPosts";

export const startPostEditing = () => {
  document.addEventListener("click", async (event) => {
    const editBtn = event.target.closest(".posts__edit");

    if (editBtn) {
      const postItem = editBtn.closest(".posts__item");

      if (postItem.classList.contains("text-editing")) return;

      const title = postItem.querySelector(".posts__title");
      const description = postItem.querySelector(".posts__description");

      title.contentEditable = "true";
      description.contentEditable = "true";

      title.classList.add("text-editable");
      description.classList.add("text-editable");

      postItem.classList.add("text-editing");
      return;
    }

    const saveBtn = event.target.closest(".posts__save");

    if (!saveBtn) return;

    const postItem = saveBtn.closest(".posts__item");

    const title = postItem.querySelector(".posts__title");
    const description = postItem.querySelector(".posts__description");
    const img = postItem.querySelector(".posts__img");

    const post = {
      title: title.textContent.trim(),
      description: description.textContent.trim(),
      img: postItem.dataset.postImg,
      category: postItem.dataset.postCategory,
    };

    if (!post.title || !post.description) {
      alert("Fill in the title and description");
      return;
    }

    try {
      saveBtn.disabled = true;

      const response = await updatePostsApi(
        postItem.dataset.postId,
        post,
      );

      if (!response || !response.ok) {
        throw new Error("Failed to save the post");
      }

      await renderPosts();
    } catch (error) {
      console.error(error);
      alert("Save error");
    } finally {
      saveBtn.disabled = false;
    }
  });

  // Выбор новой фотографии
  document.addEventListener("change", (event) => {
    if (!event.target.matches(".posts__img-input")) return;

    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Выбери файл изображения");
      event.target.value = "";
      return;
    }

    // Ограничиваем размер, чтобы не перегружать json-server
    if (file.size > 1024 * 1024) {
      alert("Выбери изображение размером до 1 МБ");
      event.target.value = "";
      return;
    }

    const postItem = event.target.closest(".posts__item");
    const img = postItem.querySelector(".posts__img");

    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result;
      postItem.dataset.postImg = reader.result;
    };

    reader.readAsDataURL(file);
  });
};
