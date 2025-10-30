// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',  // Redirect to /home
        permanent: true,
      },
    ];
  },
};
