export const logout = async () => {
  await localStorage.clear();
  window.location.pathname = "/login";
};