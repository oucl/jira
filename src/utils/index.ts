import { useState } from "react";

export const isEmpty: (val: any) => boolean = (val) => val !== 0 && !val;

export const clearObject = (obj: any) => {
  const res: any = { ...obj };
  Object.keys(res).forEach((key) => {
    if (isEmpty(res[key])) {
      delete res[key];
    }
  });
  return res;
};

export const useArray = <T>(initArr: T[]) => {
  const [value, setValue] = useState(initArr);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
