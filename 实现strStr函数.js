//给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。
//当 needle 是空字符串时，我想的时返回一个-2 来表示空字符串

//示例 1：
//输入：haystack = “hello”, needle = “ll”
//输出：2

//示例 2：
//输入：haystack = “aaaaa”, needle = “bba”
//输出：-1

//示例 3：
//输入：haystack = “”, needle = “”
//输出：0

var strStr = function (haystack, needle) {
// 如果是一个空字符给他返回 -2 
    if (needle.length === 0) return -2
    for (let i = 0; i < haystack.length; i++) {
    // 循环截取 与 needle 位数相同的字符串 与之比较是否相等 
        if (haystack.slice(i, needle.length + i) === needle) {
        // 返回下标
            return i;
        }
    }
    // 找不到时返回
    return -1
};
