import { useState } from "react";

interface State<D> {
  stat: "idle" | "loading" | "error" | "success";
  data: D | null;
  error: Error | null;
}

const defaultInitState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};

export const useAsync = <D>(initState?: State<D>) => {
  const [state, setState] = useState({
    ...defaultInitState,
    ...initState,
  });
  const setData = (data: D) => setState({ stat: "success", data, error: null });
  const setError = (error: Error) =>
    setState({ stat: "error", data: null, error });
  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请输入有效的Promise对象");
    }
    setState({ ...state, stat: "loading" });
    return promise
      .then((data) => {
        setTimeout(() => {
          setData(data);
        }, 1000);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
  };

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    data: state.data,
    error: state.error,
    setData,
    setError,
    run,
  };
};
