const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules');

module.exports = withCSS(
  withSass(
    withTM({
      transpileModules: [
        'react-flexbox-grid',
      ],
      webpack: function(config) {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        })
        return config
      }
    }),
  ),
);
