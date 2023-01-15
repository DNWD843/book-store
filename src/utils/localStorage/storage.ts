const getData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

const setData = (key: string, value: Object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteData = (key: string | string[]) => {
  if (Array.isArray(key)) {
    key.forEach((str) => localStorage.removeItem(str));
  } else {
    localStorage.removeItem(key);
  }
};

const updateData = (key: string, newData: Object) => {
  const currentData: Object | null = getData(key);

  if (currentData) {
    setData(key, { ...currentData, ...newData });
  } else {
    setData(key, newData);
  }
};

const clearAllData = () => localStorage.clear();
export { getData, setData, deleteData, clearAllData, updateData };
