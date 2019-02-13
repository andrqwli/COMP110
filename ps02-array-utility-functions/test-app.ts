import { concat, sub } from "./consubexport-app";
import { print } from "introcs";

export let main = async () => {
    let c: number[] = [];
    let a = [1, 7, 8, 9];
    let b = [4, 5];
    let x = 1;
    c = sub(a, 0, x);
    print(c);
    c = concat(c, b);
    print(c);
    print(b);
    c = concat(c, sub(a, x, a.length));
    print(c);

};
main();