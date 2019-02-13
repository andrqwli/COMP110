import { print } from "introcs";

export let main = async () => {
    let equals = (a: number[], b: number[]): boolean => {
        let counter = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                counter++;
            }
        }
        return (counter === b.length && counter === a.length);
    };
    print(equals([0, 1, 2], [0, 1, 2]));
    print(equals([0, 1], [0]));
    print(equals([], []));
};

main();