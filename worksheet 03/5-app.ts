import { print } from "introcs";

let a: string[] = ["a"];
let b: string[] = ["b"];

export let main = async () => {
    swap();
    print(a[0] + " - " + b[0]);
};

let swap = (): void => {
    let temp = a;
    a = b;
    b = temp;
    print(a[0] + " - " + b[0]);
};

main();