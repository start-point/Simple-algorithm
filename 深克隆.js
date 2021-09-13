const obj = {
    "childrenList": [{
        "childrenList": [{
            "childrenList": () => {
                console.log(this)
            },
            "id": 5,
            "name": "子节点11",
            "pId": 3,
            "type": "1"
        }],
        "id": 3,
        "name": "子节点1",
        "pId": 1,
        "type": "1"
    }],
    "id": 1,
    "name": "根节点1",
    "pId": 0,
    "type": "1"
}

function clone(num) {
	// 申明一个变量,不赋值,因为他有可变性
    let data;
    // 判断 是否为对象
    if (num instanceof Object) {
    // 函数是引用
        if (num instanceof Function) {
            return new Function('return '+num.toString()).call(this)
        } else if (num instanceof Array) {
        // 如果数组 递归遍历就好啦
            data = [];
            for (let v in num) {
                data.push(clone(num[v]));
            }
        } else {
        // 同数组一样
            data = {};
            for (let v in num) {
                data[v] = clone(num[v]);
            }
        }
    } else {
    // 基本数据类型 直接赋值就好啦
        data = num;
    }
    return data;
}

console.log(clone(obj));
