import { print } from "introcs";

export let main = async() => {
    let arr = [2, 7, 3, 1, 0];
    let aa = a(arr);
    let bb = b(arr);
    let cc = c(arr);
    print(arr);
    print(cc);
};

export let a = (x: number[]): number[] => {
    let y = [];
    for (let i = 0; i < x.length; i++) {
        y[i] = x[i];
        x[i] *= 2;
    }
    return y;
};

export let b = (x: number[]): number[] => {
    x[x.length] = x[0] * 4;
    return x;
};

export let c = (x: number[]): number[] => {
    let y = [];
    for (let i = 0; i < x.length; i++) {
        y[i] = 3 * i;
    }
    x = y;
    return x;
};

main();