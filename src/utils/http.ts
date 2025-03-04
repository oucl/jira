import { logout } from "api/auth-provider";
import { useAuth } from "context/auth-context";
import { stringify } from "qs";
interface httpConfig extends RequestInit {
  token?: string;
  data?: object;
}

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
export const http = (
  path: string,
  { token, data, ...customConfig }: httpConfig = {},
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (
    !(data === null || data === undefined || Object.keys(data).length === 0)
  ) {
    if (config.method.toLocaleUpperCase() === "GET") {
      path += `?${stringify(data)}`;
    } else {
      config.body = JSON.stringify(data || {});
    }
  }
  return fetch(`${apiBaseUrl}/${path}`, config).then(async (response) => {
    if (response.status === 401) {
      await logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (path: string, config: httpConfig = {}) =>
    http(path, { ...config, token: user?.token });
};

// export const useHttp = () => {
//     const { user } = useAuth();
//     // utility type 的用法：用泛型给它传入一个其他类型，然后utility type对这个类型进行某种操作
//     return useCallback(
//       (...[endpoint, config]: Parameters<typeof http>) =>
//         http(endpoint, { ...config, token: user?.token }),
//       [user?.token]
//     );
//   };
