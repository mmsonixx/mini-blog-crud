import { getPostsApi } from "../../api/posts/getPostsApi";
import { makePostsList } from "../../markup/posts/makePostsList";

const lists = {
  energy: document.querySelector(".posts__container .posts__list"),
  java: document.querySelector(".posts__container-java .posts__list"),
  juice: document.querySelector(".posts__container-juice .posts__list"),
};

export const renderPosts = async () => {
  const response = await getPostsApi();

  console.log("Posts:", response);
  console.log("Array:", Array.isArray(response));

  if (!Array.isArray(response)) {
    console.error("Posts is not an array:", response);
    return;
  }

  Object.values(lists).forEach((list) => {
    if (list) list.innerHTML = "";
  });

  response.forEach((post) => {
    const list = lists[post.category];

    if (list) {
      list.insertAdjacentHTML("beforeend", makePostsList([post]));
    }
  });
};
