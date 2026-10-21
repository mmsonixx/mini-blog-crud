export const makePostsList = (posts) => {
  const postsHtml = posts
    .map(
      (post) => `
        <li
          class="posts__item"
  data-post-id="${post.id}"
  data-post-img="${post.img}"
  data-post-category="${post.category}"
        >
       <label class="posts__change-img">
  Photo
  <input
    type="file"
    class="posts__img-input"
    accept="image/*"
    hidden
  >
</label>
          <button class="posts__edit" type="button" aria-label="Edit">
            ✎
          </button>

          <button class="posts__delete" type="button" aria-label="Delete">
            &times;
          </button>

          <button class="posts__save" type="button">
           Save
          </button>

          <div class="posts__card">
            <div class="posts__front">
              <img src="${post.img}" alt="${post.title}" class="posts__img">
            </div>

            <div class="posts__back">
              <h2 class="posts__title">${post.title}</h2>
              <p class="posts__description">${post.description}</p>
            </div>
          </div>
        </li>
      `,
    )
    .join("");

  return postsHtml;
};
