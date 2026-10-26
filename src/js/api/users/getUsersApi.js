export const getUsersApi = async () => {
  try {
    const response = await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/users");
    const users = await response.json();

    return users;
  } catch (error) {
    console.log(error.message);
  }
};
