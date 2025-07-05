module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    commandRunner: {
      command: "npm test"
    },
    coverageAnalysis: "off"
  });
};
