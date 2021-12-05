# javascript-tricks

> Some tips and tricks for javascript.
---


1. Array
    1. 创建 `0-n` 数组
        ```js
        Object.keys(Array.from({ length: n + 1 }));
        Array.from((new Array(n + 1).keys()));
        [...Array(n + 1).keys()];
        [...Array.from({ length: n + 1 }).keys()];
        ```

    2. 创建长度为 `m` 的全 `n` 数组
        ```js
        [...Array(m).fill(n)];
        ```

    3. 创建 `1-n` 数组
        ```js
        [...Array(n).keys()].map(i => i + 1);
        Array.from(Array(n), (_, i) => i + 1);
        //偶数数组
        Array.from(Array(n), (_, i) => i * 2);
        ```

    4. shuffle 数组乱序
        ```js
        let arr = [1, 2, 3, 4, 5, 6];
        let shuffledArr = arr.sort(() => Math.random() - 0.5);
        ```

    5. 数组相邻元素操作
       ```js
       let arr = [1, 2, 3, 4, 5, 6];
       arr.every((cur, idx, src) => idx < 1 || cur >= src[idx - 1]);
       arr.reduce((acc, cur, idx, src) => idx < 1 || cur >= src[idx - 1]);
       ```

2. String
    1. 字符串转数字
        ```js
        let str1 = 'hello';
        let str2 = '123456';
        let str3 = true;
        let str4 = false;
        console.log(~~str1); // 0
        console.log(~~str2); // 123456
        console.log(~~str3); // 1
        console.log(~~str4); // 0
        // 一定转为Number，不是纯数字的字符串转为0
        // truthy -> 1, falsy -> 0 
        ```

3. Operator
    1. `??`
    ```js
    let valA =  null ?? 'DefaultA'; // 'DefaultA'
    let valB = undefined ?? 'DefaultB'; // 'DefaultB'
    let valC = false ?? 'DefaultC'; // false
    // 当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
    ```

4. Statement
    1. 判断
    ```js
    if (result) console.log("something");
    if (!result) console.log("something");
    result && console.log("something"); // better
    result || console.log("something"); // better
    ```

       
