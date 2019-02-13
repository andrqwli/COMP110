import { print, promptNumber } from "introcs";

export let main = async () => {
    let x = await promptNumber("x?");
    let y = await promptNumber("y?");
    let answer = modulo(x, y);
    print(answer);

};

let modulo = (x: number, y: number): number => {
    while (x >= y) {
        x = x - y;
    }
    return x;

};

main();