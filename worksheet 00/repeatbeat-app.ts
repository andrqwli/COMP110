import { print, promptNumber, promptString } from "introcs";

export let main = async () => {
    let str = await promptString("What do you want repeated?");
    let n = await promptNumber("How many times?");

    let answer = repeatBeat(str, n);
    print(answer);

};

let repeatBeat = (y: string, x: number): string => {
    let a = 1;
    let stringOutput = y;
    while (a < x) {
        stringOutput = stringOutput + " " + y;
        a = a + 1;
    }
    return stringOutput;
};



main();