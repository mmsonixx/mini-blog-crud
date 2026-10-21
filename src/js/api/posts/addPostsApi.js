export const addPostsApi = async (newPost) => {
try {
    const options = {
        method: "POST",
        body: JSON.stringify(newPost),
    };
   return await fetch("http://localhost:3000/posts", options).then((response) => response.json());
} catch (error) {
    console.log(error.message);
}
}