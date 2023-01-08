const getData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

const setData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteData = (key: string | string[]) => {
  if (Array.isArray(key)) {
    key.forEach((str) => localStorage.removeItem(str));
  } else {
    localStorage.removeItem(key);
  }
};

const clearAllData = () => localStorage.clear();
export { getData, setData, deleteData, clearAllData };
