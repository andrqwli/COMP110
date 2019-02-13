import { print } from "introcs";
import { isShorter } from "./isShorter-app";

export let main = async () => {
    
    let shortest = (arr: number[]): number => {
        let shorter = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (isShorter(arr[i], shorter)) {
                shorter = arr[i];
            }
        }  
        return shorter;
    };
    print(shortest([5, 2, 6, 0, -1]));
};

main();