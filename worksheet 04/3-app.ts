import { print } from "introcs";


export let main = async () => {
    let a: string[] = ["u", "n", "c", "!"];
    print(p(a, 0));
};

let p = (a: string[], i: number): string => {
    if (i < 0 || i >= a.length) {
        return "";
    } else if (i === a.length - 1) {
        // Break Here
        return a[i];
    } else {
        return a[i] + p(a, i + 1) + a[i];
    }
};

main();