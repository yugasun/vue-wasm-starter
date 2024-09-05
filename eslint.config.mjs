import antfu from '@antfu/eslint-config';

export default antfu({
  unocss: false,
  vue: true,
  formatters: true,
  rules: {
    'ts/no-use-before-define': 'off',
    'vue/no-v-html': 'off',
    'regexp/no-unused-capturing-group': 'off',
    'node/prefer-global/process': 'warn',
    'ts/no-empty-object-type': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    'jsdoc/check-param-names': 'warn',
    'no-console': 'warn',
    'style/semi': ['warn', 'always'],
    'eslint-comments/no-unlimited-disable': 'warn',
    'ts/ban-ts-comment': 'warn',
    'ts/method-signature-style': 'off',
  },
  ignores: [
    'crates/',
    'node_modules/',
    'dist/',
    'build/',
    'public/',
  ],
});
