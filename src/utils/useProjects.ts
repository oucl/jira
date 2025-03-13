import { useEffect } from "react";
import { useHttp } from "./http";
import { useAsync } from "./useAsync";
import { clearObject } from "utils";
export const useProjects = (params?: any) => {
  const { run, ...result } = useAsync<any[]>();
  const http = useHttp();
  useEffect(() => {
    run(http("projects", { data: clearObject(params) }));
  }, [params]);
  return result;
};
