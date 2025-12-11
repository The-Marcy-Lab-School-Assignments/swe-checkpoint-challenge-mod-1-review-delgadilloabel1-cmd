// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => ({
  username,
  email,
  isActive: true,
  loginCount: 0,
});

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount += 1;
  return user;
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  const keys = Object.keys(user);
  keys.forEach((key) => {
    console.log(`${key}: ${user[key]}`);
  });
};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  return { ...user };
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
