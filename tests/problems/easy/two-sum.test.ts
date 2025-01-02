import { test, expect } from "@playwright/test";
import { twoSum } from "../../../src/problems/easy/two-sum";

test.describe("Two Sum", () => {
  test("应该返回两个数的索引，它们的和等于目标值", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("当没有解决方案时应该返回空数组", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});
