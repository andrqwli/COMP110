import { print } from "introcs";

export let main = async() => {
    f(2);
};

export let f = (n: number): void => {
    if (n === 3) {
        print(1);
        return;
    } else if (n > 3) {
        print(2);
        return;
    } else {
        print(3);
        return;
    }
};

main();