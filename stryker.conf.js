module.exports = function(config) {
  config.set({
    mutate: ['app.js', 'app-controller.js'],
    mutator: 'javascript',
    testRunner: 'mocha',
    reporters: ['html', 'progress'],
    mochaOptions: {
      spec: ['app-test.js'],
      timeout: 10000
    },
    thresholds: { high: 80, low: 60, break: 50 }
  });
};
