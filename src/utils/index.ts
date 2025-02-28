export const isEmpty = (val: any) => val !== 0 && !val;

export const clearObject = (obj: any) => {
  const res: any = { ...obj };
  Object.keys(res).forEach((key) => {
    if (isEmpty(res[key])) {
      delete res[key];
    }
  });
  return res;
};
