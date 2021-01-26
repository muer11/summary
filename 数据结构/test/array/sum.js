/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2021-01-13 16:51:10
 * @LastEditors: shenjia
 * @LastEditTime: 2021-01-18 20:55:15
 */

/*
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 原题链接：https://leetcode-cn.com/problems/3sum/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  let arr = nums.sort();

  return mapArr(arr);
};

// 递归
// let result = [];
// let setArr = [];
// let mapArr = function (arr) {
//   for (let num1 = 0; num1 < arr.length; num1++) {
//     setArr.push(arr[num1]);

//     if (setArr.length < 3) return mapArr(arr.slice(++num1));

//     if (add(setArr) === 0) {
//       result.push(setArr);
//     }
//     setArr.pop();

//     return mapArr(arr.slice(++num1))
//   }

//   console.log('setArr', setArr);

//   return result || [];
// };

const add = function (arr) {
  return arr.reduce((prev, next) => prev + next);
};

// 递归
let mapArr = function (arr) {
  let result = [];
  for (let num1 = 0; num1 < arr.length; num1++) {
    let setArr = [];
    setArr.push(arr[num1]);
    for (let num2 = num1 + 1; num2 < arr.length; num2++) {
      setArr.push(arr[num2]);
      for (let num3 = num2 + 1; num3 < arr.length; num3++) {
        setArr.push(arr[num3]);
        if (add(setArr) === 0) {
          // result = [...result, setArr];
          result.push(setArr);
          // console.log('setArr', setArr, result, result.push(setArr));
        }
        setArr.pop();
      }
      setArr.pop();
    }
    setArr.pop();
  }
  return result || [];
};
