const getUserFromLS = (key: string) => (localStorage.getItem(key)
  ? JSON.parse(localStorage.getItem(key)!)
  : null);

const setUserToLS = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteUserFromLS = (key: string) => {
  localStorage.removeItem(key);
};

export { getUserFromLS, setUserToLS, deleteUserFromLS };
