import { print } from "introcs";

export let main = async () => {
    let result = sum(3);
    print(result);
};

let sum = (n: number): number => {
    if (n <= 0) {
        // BREAK HERE
        return 0;
    } else {
        return n + sum(n - 1);
    }
};

main();