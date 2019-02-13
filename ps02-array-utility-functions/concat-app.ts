import { print } from "introcs";

export let main = async () => {
    let concat = (a: number[], b: number[]): number[] => {
        let c = a;
        for ( let i = 0; i < b.length; i++) {
            c[c.length] = b[i];
        }
        return c;
    };
    print(concat([0, 1, 2], [3, 4, 5]));
};

main();

// only works for number arrays, don't have a data type for arrays of any data type