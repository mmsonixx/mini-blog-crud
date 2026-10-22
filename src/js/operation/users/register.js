
import { getUsersApi } from "../../api/users/getUsersApi.js";
import { addUsersApi } from "../../api/users/addUsersApi.js";

export const registerUser = async (newUser) => {
  try {
    const users = await getUsersApi();

    if (!Array.isArray(users)) {
      console.log("Не удалось получить список пользователей");
      return;
    }

    const existingUser = users.find(
      (user) => user.email === newUser.email
    );

    if (existingUser) {
      return;
    }

    const user = await addUsersApi(newUser);

    if (user) {
      return user;
    }
  } catch (error) {
    console.log(error.message);
  }
};
