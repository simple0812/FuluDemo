const testWebpackConfig = require('./webpack.test')();

module.exports = (config) => {
  const configuration = {
    basePath: '',

    /*
      * Frameworks to use
      *
      * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      */
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [],

    client: {
      captureConsole: false,
    },

    files: [
      { pattern: './unit.test.js', watched: false },
    ],

    proxies: {
      '/assets/': '/base/src/assets/',
    },

    preprocessors: { './unit.test.js': ['coverage', 'webpack', 'sourcemap'] },

    // Webpack Config at ./webpack.test.js
    webpack: testWebpackConfig,

    coverageReporter: {
      type: 'in-memory',
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-remap-coverage',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html',
    },

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i.e.
      noInfo: true,
      // and use stats to turn off verbose output
      stats: {
        chunks: false,
      },
    },

    /*
      * test results reporter to use
      *
      * possible values: 'dots', 'progress'
      * available reporters: https://npmjs.org/browse/keyword/karma-reporter
      */
    reporters: ['mocha', 'coverage', 'remap-coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: [
      'Chrome',
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },

    /*
      * Continuous Integration mode
      * if true, Karma captures browsers, runs the tests and exits
      */
    singleRun: true,
  };

  if (process.env.TRAVIS) {
    configuration.browsers = [
      'ChromeTravisCi',
    ];
  }

  config.set(configuration);
};
