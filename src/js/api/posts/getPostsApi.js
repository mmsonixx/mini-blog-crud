export const getPostsApi = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to get posts:", error);
    return null;
  }
};