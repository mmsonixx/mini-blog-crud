export const addPostsApi = async (newPost) => {
try {
    const options = {
        method: "POST",
        body: JSON.stringify(newPost),
    };
    await fetch("http://localhost:3000/posts", options);
} catch (error) {
    console.log(error.message);
}
}