// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶

// 示例 2：


// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。

// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶


// 解法：

// 0阶=> （1）不需要走 走法所以为1种

// 1阶=> （1）

// 2阶=> （1+1）+（2）0阶+1阶

// 3阶 => （1+1+1） + （1+2）+（2+1）2阶+1阶

// 4阶 => （1+1+1+1） + （1+2+1）+（1+1+2）+（2+1+1）+（2+2） 3阶+2阶
// ......

// 总结：方法数 = f(n-1)+f(n-2)；


// 公式有了，可以直接用递归解决，就是数值过大的话，运行速率会很慢


var climbStairs = function (n) {
    if (n < 2) { return 1; }
    return climbStairs(n - 2) + climbStairs(n - 1);
};

//下面用到了动态规划，大大解决了递归所带来的效率低下的问题：

var climbStairs = function (n) {
    // 台阶数小于2的 都只需要1种方法
    if (n < 2) { return 1 }
    // 如果大于2 定义一个dp 将每次的方法记录下来 
    const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        // 根据公式每次的值都是前面俩次台阶的方法和
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    // 输出最后一位就可以了
    return dp[n];
};

