export const getPostsApi = async () => {
  try {
    const response = await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/posts");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to get posts:", error);
    return null;
  }
};