const getDataFromStorage = (key: string) => (localStorage.getItem(key)
  ? JSON.parse(localStorage.getItem(key)!)
  : null);

const setDataToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteDataInStorage = (key: string) => {
  localStorage.removeItem(key);
};

const clearAllDataInStorage = () => localStorage.clear();

export { getDataFromStorage, setDataToStorage, deleteDataInStorage, clearAllDataInStorage };
