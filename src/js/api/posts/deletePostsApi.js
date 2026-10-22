export const deletePostsApi = async (id) => {
  try {
    return await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error.message);
  }
};
