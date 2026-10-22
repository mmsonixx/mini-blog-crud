
import { getUsersApi } from "../../api/users/getUsersApi.js";

export const loginUser = async (loginData) => {
  try {
    const users = await getUsersApi();

    if (!Array.isArray(users)) {
      console.log("Не удалось загрузить пользователей");
      return;
    }

    const existingUser = users.find(
      (user) => user.email === loginData.email
    );

    if (
      !existingUser ||
      existingUser.password !== loginData.password
    ) {
      return;
    }

    return existingUser;
  } catch (error) {
    console.log(error.message);
  }
};
