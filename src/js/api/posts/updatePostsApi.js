export const updatePostsApi = async (id, post) => {
  try {
    return await fetch(`http://localhost:3000/posts/${id}}`, {
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