import { getPostsApi } from "../../api/posts/getPostsApi";
import { makePostsList } from "../../markup/posts/makePostsList";

const lists = {
  energy: document.querySelector(".posts__container .posts__list"),
  java: document.querySelector(".posts__container-java .posts__list"),
  juice: document.querySelector(".posts__container-juice .posts__list"),
};

export  const renderPosts = async () => {
    const data = await getPostsApi();
     Object.values(lists).forEach((list) => {
    list.innerHTML = "";
  });

  data.forEach((post) => {
    const list = lists[post.category];

    if (list) {
      list.insertAdjacentHTML(
        "beforeend",
        makePostsList([post])
      );
    }
  });
    
}