export const deletePostsApi = async (id) => {
  try {
    return await fetch(`https://6adf971e8e42963c8d5e3348.mockapi.io/posts/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error.message);
  }
};
