/** @type {import('ts-jest').JestConfigWithTsJest} */
/* eslint-disable @typescript-eslint/no-magic-numbers -- jest settings*/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: 1,
  forceExit: true,
  detectOpenHandles: true,
  silent: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/',
    '<rootDir>/scripts/',
    '<rootDir>/build/',
    '<rootDir>/dist/',
    '.test.ts'
  ],
  coverageThreshold: {
    global: {
      lines: 95
    }
  },
  testMatch: ['<rootDir>/tests/**/*.test.ts']
}
