module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 规则参考：https://commitlint.js.org/#/reference-rules
    // 'type-enum': [2, 'always', [
    //     'feat', 'fix', 'refactor', 'docs', 'style', 'build', 'chore', 'perf', 'revert'
    // ]],
    // 'type-case': [0],
    // 'scope-case': [0],
    // 'subject-case': [0],
    // 'scope-empty': [2, 'never'] // scope 必填，无法确认时使用通配符 * 代替
  },
};
