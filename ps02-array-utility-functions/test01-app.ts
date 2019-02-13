import { print } from "introcs";

export let max = (a: number[]): number => {
    if (a.length === 0) {
        return Number.MIN_VALUE;
    }
    let largest = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
            largest = a[i];
        }
    }
    return largest;
};


export let main = async () => {
    print(max([]));
};

main();