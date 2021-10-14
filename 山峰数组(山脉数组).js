// 符合下列属性的数组 arr 称为 山峰数组（山脉数组） ：

// arr.length >= 3
// 存在 i（0 < i < arr.length - 1）使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// 给定由整数组成的山峰数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i ，即山峰顶部。

// > 示例 1： 输入：arr = [0,1,0] 输出：1 // 返回下标
// > 示例 2： 输入：arr = [1,3,5,4,2] 输出：2
// > 示例 3： 输入：arr = [0,10,5,2] 输出：1
// > 示例 4：输入：arr = [3,4,5,1] 输出：2
// > 示例 5： 输入：arr = [24,69,100,99,79,78,67,36,26,19] 输出：2

// **##下面是三种解法**

// 1、二分查找法：

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr: string | any[]): number {
    let [low, high] = [0, arr.length - 1];
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midItem = arr[mid];
        if (arr[mid - 1] > midItem) {
            // 山脉在前半区
            high = mid - 1;
        } else if (arr[mid + 1] > midItem) {
            // 山脉在后半区
            low = mid + 1;
        } else if (midItem > arr[mid - 1] && midItem > arr[mid + 1]) {
            // midItem比两边大，mid是山脉
            return mid;
        }
    }
};

// 2、这是 遍历每个数 去比对 找出最大的那个数 返回下标

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr: string | any[]): number {
    let max = arr[0];
    for(let i =1;i<arr.length;i++){
        if(max > arr[i]){
            return i-1;
        }else{
            max = arr[i];
        }
    }
};

// 3、js自带的api已经就可以解决这个问题，我不知道这么用算不算违反题意😄

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr: string | any[]): number {
    return arr.indexOf(Math.max.apply(null,arr))
};
