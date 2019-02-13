import { print } from "introcs";

export let max = (a: number[]): number => {
    if (a === []) {
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


// use cases:
// max([0, 1, 5, 10]) -> 10
// max([-1, 4, 5]) -> 5
// edge cases:
// max([]) -> 