    const num = 1221;
    const isPalindrome = (x) => {
        let num = x;
        let y = 0;
        if (x === 0) return true;
        if (x < 0 || x % 10 === 0) return false;
        while (x) {
            y = parseInt(y * 10 + parseInt(x % 10));
            x = parseInt(x / 10)
        }
        
        if(y === num){
            return true;
        }else{
            return false;
        }

    }
    console.log(isPalindrome(num));
