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
   images: {
    domains: ['image.tmdb.org'], // Add image.tmdb.org to the list of allowed domains
  },
};
