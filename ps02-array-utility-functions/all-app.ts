import { print } from "introcs";

export let main = async () => {
    let all = (a: number[], x: number): boolean => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== x) {
                return false;
            }
        }
        return true;
    };
};

main();