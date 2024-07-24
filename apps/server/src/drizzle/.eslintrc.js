module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:drizzle/recommended'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['drizzle'],
};
