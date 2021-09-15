// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 示例 1:
// //输入: 
// const nums = [1,3,5,6];
// const target = 5;
// //输出: 2

// 示例 2:
// //输入: 
// const nums = [1,3,5,6];
// const target = 2;
// //输出: 1

// 示例 3:
// //输入: 
// const nums = [1,3,5,6];
// const target = 7;
// //输出: 4

// 示例 4:
// //输入: 
// const nums = [1,3,5,6];
// const target = 0;
// //输出: 0

// 示例 5:
// //输入: 
// const nums = [1];
// const target = 0;
// //输出: 0

var searchInsert = function (nums, target) {
    for (let i = 0; i < arr.length; i++) {
        // 判断数组内是否有这个target
        if ( target <= arr[i] ) {
            return i;
        } 
    }
    // 没有 target 则是放在数组最后面
    return nums.length;
};
