class AuthService {
  static singIn(userData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        window.localStorage.setItem('authenticated', true);
        window.localStorage.setItem('authBody', JSON.stringify({ userData }));
        resolve();
      }, 2000);
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        window.localStorage.clear();
        resolve();
      }, 2000);
    });
  }
}

export default AuthService;
