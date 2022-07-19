const getData = (key: string) => (localStorage.getItem(key)
  ? JSON.parse(localStorage.getItem(key)!)
  : null);

const setData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteData = (key: string) => {
  localStorage.removeItem(key);
};

const clearAllData = () => localStorage.clear();
export { getData, setData, deleteData, clearAllData };
