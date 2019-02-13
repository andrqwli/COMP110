import { print } from "introcs";

export let main = async () => {
    let cycle = (x: number, y: number): number[] => {
        let a: number[] = [];
        if (x <= 0) {
            return a;
        }
        for (let i = 1; i <= y; i++) {
            if (i % x !== 0) {
                a[i - 1] = i % x;
            }   else {
                a[i - 1] = x;
                }
        }
        return a;
    };
    print(cycle(3, 7));
    print(cycle(6, 15));
    print(cycle(0, 2));
    print(cycle(2, 0));

};

main();