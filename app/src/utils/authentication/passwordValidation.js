const isValidPassword = password => password.length >= 8 && !password.toLowerCase().includes('password');

export { isValidPassword as default };
