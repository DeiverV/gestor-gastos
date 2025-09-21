/* eslint-disable @typescript-eslint/no-explicit-any */

export const saveToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};
