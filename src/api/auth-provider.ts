import { http } from "utils/http";
const localStorageKey = "__auth_provider_token__";
export interface User {
  username: string;
  userId: string;
  password?: string;
  // remember: boolean,
  token: string;
}

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user: User) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return http("users", { data: { name: data.username } }).then((res) => {
    const item = res?.[0] || {};
    const oneUser = {
      username: item.name,
      userId: item.id,
      token: item.id,
    };
    if (oneUser?.token) {
      return handleUserResponse(oneUser);
    } else {
      return Promise.reject(oneUser);
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  const params = {
    name: data.username,
    age: 18,
  };
  return http("users", { method: "POST", data: params }).then((res) => {
    const oneUser = {
      username: res.name,
      userId: res.id,
      token: res.id,
    };
    console.log("111111 :>> ", oneUser);
    if (oneUser?.token) {
      return handleUserResponse(oneUser);
    } else {
      return Promise.reject(oneUser);
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);

export const getCurrentUser = () => {
  const token = getToken();
  return http(`users/${token}`);
};
