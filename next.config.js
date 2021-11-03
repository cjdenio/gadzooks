module.exports = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/story",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};
