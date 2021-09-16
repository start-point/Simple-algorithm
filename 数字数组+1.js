// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
// 示例 1：
// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

// 示例 2：
// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。

// 示例 3：
// 输入：digits = [0]
// 输出：[1]

// 解法1：
// 针对16位数字一下是可以，但是超过16位的数字就不行了，16位的数组会丢失精度，所以下面这个就处理不聊了

var plusOne = function (digits) {
    // 将数组数字转为数字加1
    const a = ((digits.join().replace(/,/g, '') - 0) + 1);
    // 转成字符串
    var str = a + "";
    // 定义一个数组 用来接收每个数字
    var resultArr = [];
    for (var i = 0; i < str.length; i++) {
        resultArr.push(parseInt(str[i]))
    }
    return resultArr;
};

// 解法2：
// 采用的是倒着遍历，如果是9则向前进

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // 最后一位如果不是9 
        if (digits[i] !== 9) {
        // 直接+1 返回就好了
            digits[i]++;
            return digits;
        } else {
            // 如果是9 则让他变成0
            digits[i] = 0;
        }
    }
    // 在遍历9时,此时的9已经被赋值为0，则在该0的前面加1
    digits.unshift(1);
    return digits;
};

// 解法3：
// 采用的一个递归方式

var plusOne = function (digits) {
    let last = digits[digits.length - 1] - 0;
    if (last === 9) {
        // 如果等于9 的话截取出除了最后一位的数组
        let arr = plusOne(digits.slice(0, digits.length - 1));
        // 给数组末尾添加0
        arr.push(0);
        // 当数组只有一个数字的时候并且是9 例：[9]
        if (digits.length === 1){
            // 到这一步已经是[0] 则向数组的开头添加一个1 [1,0]
            arr.unshift(1);
        }
        return arr;
    } else {
        // 一直截取到最后一位数字不是9时则直接加1 即可
        digits[digits.length - 1] = last + 1;
    }
    return digits;
};
