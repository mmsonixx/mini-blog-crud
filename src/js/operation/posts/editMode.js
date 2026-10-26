
export const startEditMode = () => {
  const editModeBtn = document.querySelector(".posts__edit-mode");

  editModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("editing-mode");

    const isEditing =
      document.body.classList.contains("editing-mode");

    editModeBtn.textContent = isEditing
      ? "✓ Done"
      : "✎ Edit posts";
  });
};
