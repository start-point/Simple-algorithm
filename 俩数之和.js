    const nums = [2, 7, 11, 15];
    const target = 9;

    // 方法1
    // function Nt(nums, target) {
    //     for (let i = 0; i < nums.length - 1; i++) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             // 列出所有可能性 匹配俩个数相等
    //             if (nums[i] === target - nums[j]) {
    //                 return [i, j]
    //             }
    //         }
    //     }
    // }

    // 方法2
    function Nt(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            // 判断之前有没有与其target - nums[i]) 相等的数
            if (map.has(target - nums[i])) {
                return [map.get(target - nums[i], i), i];
            }
            map.set(nums[i], i);
        }
    }

    console.log(Nt(nums, target))
