module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/setup-tests.js'],
  // setupFilesAfterEnv: ['/app/react-app/jest/setup-tests.js'], Config para Container Docker
};
