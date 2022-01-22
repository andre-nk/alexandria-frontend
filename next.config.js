module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com"
    ]
  },
  async rewrites() {
    return [
      // Rewrite everything under `/account/ to `pages/account`
      {
        source: "/notes/:any*",
        destination: "/notes/new/[]",
      },
    ];
  },
}
