const getData = <T>(key: string): T => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  return null as unknown as T;
};

const setData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteData = (key: string) => {
  localStorage.removeItem(key);
};

const clearAllData = () => localStorage.clear();
export { getData, setData, deleteData, clearAllData };
