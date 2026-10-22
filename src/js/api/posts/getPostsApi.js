export const  getPostsApi = async (response) => {
    try {
        const response =  await fetch("http://localhost:3000/posts");
        const posts = await response.json();
        return posts;
    } catch (error) {
    console.log(error.message);
  }
};