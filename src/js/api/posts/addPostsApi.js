export const addPostsApi = async (newPost) => {
try {
    const options = {
        method: "POST",
        body: JSON.stringify(newPost),
    };
   return await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/posts", options).then((response) => response.json());
} catch (error) {
    console.log(error.message);
}
}