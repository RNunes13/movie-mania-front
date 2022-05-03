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
  moduleNameMapper: {
    "utils/(.*)$": "<rootDir>/src/utils/$1",
    "theme(.*)$": "<rootDir>/src/theme/$1",
  }
};

module.exports = createJestConfig(customJestConfig);
