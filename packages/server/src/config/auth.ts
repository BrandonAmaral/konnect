export default {
  jwt: {
    secret: process.env.JWT_KEY || '',
    expiresIn: '30d',
  },
};
