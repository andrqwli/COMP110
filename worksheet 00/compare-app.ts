import { print, promptNumber } from "introcs";

export let main = async () => {
    let num1 = await promptNumber("What is number 1?");
    let num2 = await promptNumber("What is number 2?");
    let answer = compare(num1, num2);
    print(answer);

};

let compare = (x: number, y: number): number => {
    if (x === y) {
        return 0;
    }   else {
        if (x < y) {
            return -1;
        }   else {
            return 1;
        }
    }
};


main();