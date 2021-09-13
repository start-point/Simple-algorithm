    const l1 = [0];
    const l2 = [0];

    const addTwoNumbers = (l1, l2) => {
        const arr = [];
        if (l1 !== null || l2 !== null) {
            const l1Num = l1 !== null ? l1.reverse().join().replace(/,/g, '') - 0 : 0;
            const l2Num = l2 !== null ? l2.reverse().join().replace(/,/g, '') - 0 : 0;
            const num = (l1Num + l2Num).toString().split('').reverse();
            for (let v in num) {
                arr.push(num[v] - 0);
            }
            return arr;
        }else{
            return null;
        }

    }
    console.log(addTwoNumbers(l1, l2));
