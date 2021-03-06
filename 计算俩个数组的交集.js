// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：
//   输入：nums1 = [1,2,2,1], nums2 = [2,2]
//   输出：[2]

// 示例 2：
//   输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//   输出：[9,4]

// 说明：
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

// 直接上代码:

  var intersection = function(nums1, nums2) {
      const res = [];
      const map = new Map();
      for(let i = 0;i<nums1.length;i++){
          // 将数组里的值 以键值对的方式存到map里面 并且不会是重复的
          map.set(nums1[i], true)
      }
      for(let j = 0;j<nums2.length;j++){
          // 拿该数组的数组从原本的map里面取值
          if(map.get(nums2[j])){
              res.push(nums2[j]);
              // 取完一次 就删除原本map里面的数据 防止取到重复的
              map.delete(nums2[j]);
          }
      }
      return res;
  };
