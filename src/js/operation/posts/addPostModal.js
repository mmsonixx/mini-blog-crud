export const startModalEvents = () => {
  const addButtons = document.querySelectorAll(".posts__add-btn");
  const modal = document.querySelector("[data-addPosts]");
  const form = document.querySelector("[data-addPost-form]");
  const backdrop = document.querySelector("[data-backdrop]");
  const closeButton = document.querySelector(".close-modal");

  const openModal = () => {
    modal.classList.add("is-open");
    backdrop.classList.add("is-open");

    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    backdrop.classList.remove("is-open");

    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  };

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const container = button.closest("[data-category]");

      form.elements.category.value = container.dataset.category;

      openModal();
    });
  });

  closeButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  return closeModal;
};