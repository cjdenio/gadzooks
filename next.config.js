module.exports = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/story",
        permanent: true,
      },
    ];
  },
};
