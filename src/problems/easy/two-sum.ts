// 题目：https://leetcode.com/problems/two-sum/
// 题目描述：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。
// 解题思路：使用哈希表来存储数组中的每个元素及其对应的下标。在遍历数组时，计算目标值与当前元素的差值（即补数），并检查该补数是否在哈希表中存在。如果存在，则返回当前元素和补数的下标；如果不存在，则将当前元素及其下标存入哈希表，继续遍历。

// input: [2,7,11,15], 9 output: [0,1]
// input: [3,2,4], 6 output: [1,2]
// input: [3,3], 6 output: [0,1]
// input: [1,2,3], 7 output: []

// 时间复杂度：O(n) - 只需遍历一次数组
// 空间复杂度：O(n) - 需要一个哈希表存储访问过的元素

export function twoSum(nums: number[], target: number): number[] {
  // 预分配 Map 容量可以减少重新哈希的次数
  const map = new Map<number, number>();
  const len = nums.length;

  // 使用缓存长度避免重复访问 length 属性
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    const complement = target - num;

    // 使用 has + get 比直接获取值更快
    // 因为 has 操作比 get 更轻量级
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(num, i);
  }

  return [];
}
