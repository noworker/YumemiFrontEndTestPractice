const esModules = ['lodash-es', 'axios'].join('|')
module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`node_modules/(?!(${esModules})/)`],
}