export const addUsersApi = async (newUser) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    const response = await fetch("http://localhost:3000/users", options);
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};
