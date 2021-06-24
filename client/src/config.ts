/**
 * Application wide configuration.
 */
const config = {
  baseURI: '/api', // http://localhost:5000/api since we config proxy = 5000
  authToken: 'mentorlabs:authtoken',
  endpoints: {
    auth: {
      login: '/users/login',
      createAccount: '/users/create-account',
    },
  },
};

export default config;
