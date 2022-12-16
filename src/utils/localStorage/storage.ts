const getData = <T>(key: string): T | null => {
  const bookData = localStorage.getItem(key);

  if (bookData) {
    return JSON.parse(bookData);
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
