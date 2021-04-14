const verifyPassword = (password) => {
  const specialCharsRegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const numbersRegExp = /[0-9]/;
  const capitalLettersRegExp = /[A-Z]/;

  if (password.length < 8) {
    return {
      code: 1,
      description: 'Password is too short',
    };
  }

  if (!specialCharsRegExp.test(password)) {
    return {
      code: 2,
      description: 'Password does not consist of 1 special letter',
    };
  }

  if (!numbersRegExp.test(password)) {
    return {
      code: 3,
      description: 'Password does not consist of 1 number',
    };
  }

  if (!capitalLettersRegExp.test(password)) {
    return {
      code: 4,
      description: 'Password does not consist of 1 capital letter',
    };
  }

  return { code: 0 };
};

export default verifyPassword;
