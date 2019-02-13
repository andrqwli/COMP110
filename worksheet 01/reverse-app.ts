import { print } from "introcs";

export let main = async () => {
    let arr: number[] = [];
    let reverse = (arrInput: number[]): number[] => {
        for (let i = 0; i < arrInput.length; i++) {
            arr[i] = arrInput[arrInput.length - (i + 1)]; 
        }
        return arr;
    };




    print(reverse([1, 2, 3, 4, 5, 6, 7, 8])); 








};

main();