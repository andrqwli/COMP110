/** 
 * Author: Andrew Li
 * ONYEN: andrqwli
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received 
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff, 
 * the problem set code I am submitting. 
 */

import { print, csvToArray } from "introcs";

class Clue {
    person: string = "";
    hairColor: string = "";
    weapon: string = "";
    desk: number = 0;
    note: string = "";
    hasPencil: boolean = false; 
}
export let main = async () => {
    let data: Clue[] = await csvToArray("Clue Data", Clue);
    print(data);
    let filtered: Clue[] = filterOutBlonde(data);
    print(filtered);
    print(filterOutBlonde([]));
    print(findClue1(data));
    print(filterAboveDeskNumber(data, 7));
    print(filterByHairColor(data, "brown"));
    print(mapToDeskNumber(data));
    print(findClue2(data));
    print(findThief(data));
};

export let filterOutBlonde = (clue: Clue[]): Clue[] => {
    let nonBlondes: Clue[] = [];
    let j = 0;
    for (let i = 0; i < clue.length; i++) {
        if (clue[i].hairColor !== "blonde") {
            nonBlondes[j] = clue[i];
            j++;
        }
    }
    return nonBlondes;
};

export let nth = (clue: Clue[], index: number): Clue => {
    return clue[index];
};

export let findClue1 = (data: Clue[]): string => {
    let newData = filterOutBlonde(data);
    let clue1 = nth(newData, 4);
    return clue1.note;
};

export let sum = (a: number[]): number => {
    let b = 0;
    if (a.length === 0) {
        return 0;
    }
    for (let i = 0; i < a.length; i++) {
        b += a[i];
    }
    return b;
};

export let average = (a: number[]): number => {
    return sum(a) / a.length;
};

export let filterAboveDeskNumber = (clues: Clue[], deskNum: number): Clue[] => {
    let a: Clue[] = [];
    let j = 0;
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].desk > deskNum) {
            a[j] = clues[i];
            j++;
        }
    }
    return a;
};

export let filterByHairColor = (clues: Clue[], color: string): Clue[] => {
    let a: Clue[] = [];
    let j = 0;
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].hairColor === color) {
            a[j] = clues[i];
            j++;
        }
    }
    return a;
};

export let mapToDeskNumber = (clues: Clue[]): number[] => {
    let a: number[] = [];
    for (let i = 0; i < clues.length; i++) {
        a[i] = clues[i].desk;
    }
    return a;
};

export let findClue2 = (clues: Clue[]): string => {
    let avg = average(mapToDeskNumber(clues));
    let aDeskNumber = filterAboveDeskNumber(clues, avg);
    let aFinal = filterByHairColor(aDeskNumber, "brown");
    return aFinal[2].note;
};

export let filterPencil = (clues: Clue[]): Clue[] => {
    let a: Clue[] = [];
    let j = 0;
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].hasPencil) {
            a[j] = clues[i];
            j++;
        }
    }
    return a;
};

export let filterWeapon = (clues: Clue[], weapon: string): Clue[] => {
    let a: Clue[] = [];
    let j = 0;
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].weapon === weapon) {
            a[j] = clues[i];
        }
    }
    return a;
};

export let findThief = (data: Clue[]): string => {
    let thief = filterPencil(data);
    thief = filterWeapon(thief, "chili");
    return thief[0].person;
};
main();