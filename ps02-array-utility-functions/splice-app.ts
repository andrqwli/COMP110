import { concat, sub } from "./consubexport-app";
import { print } from "introcs";

export let main = async () => {
    let splice = (a: number[], x: number, b: number[]): number[] => {
        let c: number[] = [];
        if (x < 0) {
            x = 0;
        }
        if (x > a.length) {
            x = a.length;
        }
        c = sub(a, 0, x);
        c = concat(c, b);
        return concat(c, sub(a, x, a.length));
    };
    print(splice([1, 6, 7, 8, 9], 1, [4, 5]));
    print(splice([], 2, [4, 5]));
    print(splice([0, 1, 2], 5, [7, 8]));
};

main();