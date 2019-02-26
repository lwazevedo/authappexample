const usersRoles = [
  {
    name: 'teste',
    roles: ['home']
  },
  {
    name: 'betrano',
    roles: ['teste']
  }
];
export const isAuthenticated = () => !!localStorage.getItem('user_logado');
export const isRole = () => {
  const user_logado = JSON.parse(localStorage.getItem('user_logado')).name;
  return user_logado
    ? usersRoles.filter(us => us.name === user_logado)[0]['roles']
    : [];
};
