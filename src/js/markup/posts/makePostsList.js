export const makePostsList = (posts) => {
  console.log(posts);
  const postsHtml = posts
    .map(
      (post) => ` <li class="posts__item">
        <div class="posts__card">
      <div class="posts__front">
    <img src="${post.img}" alt="" class="posts__img">
      </div>
       <div class="posts__back">
    <h2 class="posts__title">${post.title}</h2>
    <p class="posts__description">${post.description}</p>
      </div>
       </div>
</li>`,
    )
    .join("");
  return postsHtml;
};

