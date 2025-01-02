# LeetCode Playwright TypeScript 解题集

这个项目收集了 LeetCode 最热门的 100 道题目的 TypeScript 解决方案。使用 Playwright 进行测试，确保解决方案的正确性。

## 项目结构

```
leetcode-top100-ts/
├── src/
│ └── problems/
│ ├── easy/ # 简单难度题目
│ ├── medium/ # 中等难度题目
│ └── hard/ # 困难难度题目
├── tests/
│ └── problems/ # 对应的测试文件
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## 开始使用

### 环境要求

- Node.js >= 16
- Yarn >= 1.22.0

### 安装

```bash
yarn install
```

# 运行测试

```bash
# 运行所有测试
yarn test

# 使用 UI 模式运行测试
yarn test:ui
```

## 题目列表

### Easy

1. [Two Sum](src/problems/easy/two-sum.ts) - [测试](tests/problems/easy/two-sum.test.ts)

### Medium

- 待添加

### Hard

- 待添加

# 解题模板

在 `src/problems` 目录下创建新的解决方案时，可以参考以下模板：

```typescript
// 导入 Playwright 的测试库
import { test, expect } from "@playwright/test";
```

对应的测试文件模板：

```typescript
// 导入 Playwright 的测试库
import { test, expect } from "@playwright/test";
// 导入待测试的函数
import { problemName } from "../../../src/problems/[difficulty]/problem-name";

/**
 * 描述：测试 problemName 函数的功能
 * 测试用例：
 * - 输入参数 params，期望返回值 expectedResult
 */
test.describe("Problem Name", () => {
  test("test case description", () => {
    // 调用 problemName 函数并断言结果
    expect(problemName(params)).toEqual(expectedResult);
  });
});
```
