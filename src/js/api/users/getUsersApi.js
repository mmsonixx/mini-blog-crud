export const getUsersApi = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    return users;
  } catch (error) {
    console.log(error.message);
  }
};
