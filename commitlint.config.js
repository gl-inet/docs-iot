module.exports =  {
  extends: ['@commitlint/config-conventional'],
  rules: {
      "type-enum": [2, "always",
          // 这里的规则会替换默认规则
          [
              "build",
              "docs",
              "feat",
              "fix",
              "style",
              "perf",
              "refactor",
              "revert",
              "config",
              "test",
              "ci",
              "chore",
          ],
      ],
      "subject-min-length": [2, "always", 2],
      "subject-max-length": [2, "always", 60],
  },
}
