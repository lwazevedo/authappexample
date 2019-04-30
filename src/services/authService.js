import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/api/'
})

api.interceptors.request.use(async config => {
  const tk = localStorage.getItem('token_key')
  if (tk) {
    config.headers.Authorization = `Bearer ${tk}`
  }
  return config;
})

// api.interceptors.response.use(response => response, (error) => {
//   if (error.response.status === 401) {
//     localStorage.clear()
//     return
//   }
// })

class AuthService {
  static async singIn(userData) {

    try {
      const result = await api.post('auth/signIn', { email: userData.email, password: userData.password })
      if (result) {
        console.log(result)
        localStorage.setItem('token_key', result.data.token)
        localStorage.setItem('authenticated', true);
        localStorage.setItem('authBody', JSON.stringify({
          username: 'Teste Auth',
          Type: 'React Hooks'
        }));
        return result
      }
    } catch (error) {
      console.log(error)
    }

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     window.localStorage.setItem('authenticated', true);
    //     window.localStorage.setItem(
    //       'authBody',
    //       JSON.stringify({
    //         username: 'Teste Auth',
    //         Type: 'React Hooks'
    //       })
    //     );
    //     resolve();
    //   }, 2000);
    // });
  }

  static async testing() {
    try {

      const res = await api.post('auth/checked', {})
      if (res) {
        console.log(res)
      }
    } catch (error) {

    }
  }

  static ap() {
    return api;
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
