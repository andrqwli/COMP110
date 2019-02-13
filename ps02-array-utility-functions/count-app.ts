import { print } from "introcs";

export let main = async () => {
    let count = (a: number[], x: number): number => {
        let counter = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === x) {
                counter++;
            }
        }
        return counter;
    };
};
main();