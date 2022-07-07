const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  coverageDirectory: 'coverage',
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  setupFiles: [
    '<rootDir>/__mocks__/common.js'
  ],
  moduleNameMapper: {
    "util/(.*)$": "<rootDir>/src/util/$1",
    "theme(.*)$": "<rootDir>/src/theme/$1",
    "components/(.*)$": "<rootDir>/src/components/$1",
  }
};

module.exports = createJestConfig(customJestConfig);
