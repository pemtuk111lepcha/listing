// ...existing code...
module.exports = {
  // ...existing config...
  module: {
    rules: [
      // ...existing rules...
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: [
          /node_modules\/lucide-react\/dist\/esm\/icons\/zoom-in\.js/,
        ],
        use: ['source-map-loader'],
      },
      // ...existing rules...
    ],
  },
  // ...existing code...
};