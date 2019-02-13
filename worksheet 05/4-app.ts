import { print } from "introcs";

export let main = async() => {
    let x = 9;
    let one = x;
    x = x + 3;
    let z1 = [2, 2];
    let z2: number[] = [x, 110];
    let rv = a(z2);
    let rv2 = a(z1);
    print(one);
    print(x);
    print(rv);
    print(rv2);
};


let a = (arr: number[]): number[] => {
    if (arr[0] % 3 === 0) {
        b(arr);
        return arr;
    }
    if (arr[0] % 2 === 0) {
        arr = b(arr);
        return arr;
    }
    return arr;
};

let b = (arr: number[]): number[] => {
    arr = [99, 111];
    return arr;
};

main();