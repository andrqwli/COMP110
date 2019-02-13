import { print } from "introcs";

export let main = async() => {
    let a: string[] = ["a"];
    let b: string[] = ["b"];
    swap(a, b);
    print(a[0] + " - " + b[0]);
};

let swap = (a: string[], b: string[]): void => {
    a[0] = "X";
    b[0] = "Y";
    let temp = a;
    a = b;
    b = temp;
    print(a[0] + " - " + b[0]);
};

main();