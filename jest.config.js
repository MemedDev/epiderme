module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  coverageDirectory: "coverage",
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
  ],
  resolver: "jest-pnp-resolver",
  setupFiles: [
    "react-app-polyfill/jsdom",
    './test/setup.js'
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(css|less)$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|css|less|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  verbose: true,
};
