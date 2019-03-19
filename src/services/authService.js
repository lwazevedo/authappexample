class AuthService {
  static singIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        window.localStorage.setItem('authenticated', true);
        window.localStorage.setItem(
          'authBody',
          JSON.stringify({
            username: 'Teste Auth',
            Type: 'React Hooks'
          })
        );
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
