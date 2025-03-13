import { useHttp } from "./http";
import { useAsync } from "./useAsync";
import { useMount } from "./use";

export const useUsers = (params?: any) => {
  const { run, ...result } = useAsync<any[]>();
  const http = useHttp();
  useMount(() => {
    run(http("users", params));
  });
  return result;
};
