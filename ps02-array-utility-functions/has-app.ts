import { print } from "introcs";

export let main = async () => {
    let has = (a: number[], x: number): boolean => {
        let result = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === x) {
                result = 1;
            }
        }
        return (result === 1);
    };
};

main();

// use cases:
// has([0, 1, 2], 1) -> true
// has([0, 1, 2, 3], 10) -> false
// edge cases:
// has([], 2) -> false