    // 写一个函数来查找字符串数组中的最长公共前缀， 如果不存在公共前缀，返回空字符串 ""

    // 示例 1：
    // 输入：strs = [“flower”,“flow”,“flight”]
    // 输出：“fl”

    // 示例 2：
    // 输入：strs = [“dog”,“racecar”,“car”]
    // 输出：""

    // 解释：输入不存在公共前缀。

    const longestCommonPrefix = function (strs) {
        if (strs) {
            // 拿到数组中的第一个
            let str = strs[0];
            // 然后遍历除第一个之外
            for (let i = 1; i < strs.length; i++) {
                for (var j = 0; j < strs[i].length; j++) {
                    if (strs[i][j] !== str[j]) {
                        break;
                    }
                }
                str = str.slice(0, j);
                if (!str) {
                    return '';
                }
            }
            return str;
        } else {
            return '';
        }
    };

    const str = ["flower","flow","flight"];
    console.log(longestCommonPrefix(str));
