import { print } from "introcs";

export let main = async () => {
    let sub = (a: number[], startIndex: number, endIndex: number): number[] => {
        let b: number[] = [];
        let j = 0;
        if (startIndex < 0) {
            startIndex = 0;
        }
        if (endIndex > a.length) {
            endIndex = a.length;
        }
        for (let i = startIndex; i < endIndex; i++, j++) {
            b[j] = a[i];
        }
        return b;
    };
    print(sub([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 8));
    print(sub([-1, 0, 1, 2, 3, 4, 5, 6], 1, 7));
    print(sub([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 14));
    print(sub([-1, 0, 1, 2, 3, 4, 5, 6], -5, 7));

};

main();