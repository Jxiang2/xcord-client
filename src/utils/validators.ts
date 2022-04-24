export const validateLoginForm = (mail: string, password: string) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = (mail: string, password: string, username: string) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);

  return isMailValid && isPasswordValid && isUsernameValid;
};

const validatePassword = (password: string) => password.length >= 6 && password.length <= 12;
const validateMail = (mail: string) => (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(mail);
const validateUsername = (username: string) => username.length >= 3 && username.length <= 20;
