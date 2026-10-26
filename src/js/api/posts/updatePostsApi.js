export const updatePostsApi = async (id, post) => {
  try {
    return await fetch(`https://6adf971e8e42963c8d5e3348.mockapi.io/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.log(error.message);
  }
};