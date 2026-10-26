export const addUsersApi = async (newUser) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    const response = await fetch("https://6adf971e8e42963c8d5e3348.mockapi.io/users", options);
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};
