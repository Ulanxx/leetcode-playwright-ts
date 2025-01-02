// 题目：https://leetcode.com/problems/two-sum/
// 题目描述：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。
// 解题思路：使用哈希表来存储数组中的每个元素及其对应的下标。在遍历数组时，计算目标值与当前元素的差值（即补数），并检查该补数是否在哈希表中存在。如果存在，则返回当前元素和补数的下标；如果不存在，则将当前元素及其下标存入哈希表，继续遍历。

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
