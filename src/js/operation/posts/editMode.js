export const startEditMode = () => {
  const editModeBtn = document.querySelector(".posts__edit-mode");

  if (!editModeBtn) {
    console.log("Кнопка редактирования не найдена");
    return;
  }

  editModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("editing-mode");

    const isEditing = document.body.classList.contains("editing-mode");

    editModeBtn.textContent = isEditing ? "✓ Done" : "✎ Edit posts";
  });
};
