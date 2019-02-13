// TODO: Add Honor Code Header
/*
 *
 * Author: Andrew Li
 *
 * ONYEN: andrqwli
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */
/*
 * 1. count
 * Given an array of numbers and a number to search for, returns a count of the
 * number of times the number occurs in the array.
 */
export let count = (a: number[], x: number): number => {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            counter++;
        }
    }
    return counter;
};

/*
 *  TODO: Define and export functions 2 - 9.
 */
// 2. max

export let max = (a: number[]): number => {
    if (a.length === 0) {
        return Number.MIN_VALUE;
    }
    let largest = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
            largest = a[i];
        }
    }
    return largest;
};


// 3. has

export let has = (a: number[], x: number): boolean => {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            result = 1;
        }
    }
    return (result === 1);
};

// 4. all
export let all = (a: number[], x: number): boolean => {
    if (a.length === 0) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== x) {
            return false;
        }
    }
    return true;
};

// 5. equals
export let equals = (a: number[], b: number[]): boolean => {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            counter++;
        }
    }
    return (counter === b.length && counter === a.length);
};

// 6. cycle
export let cycle = (x: number, y: number): number[] => {
    let a: number[] = [];
    if (x <= 0) {
        return a;
    }
    for (let i = 1; i <= y; i++) {
        if (i % x !== 0) {
            a[i - 1] = i % x;
        }   else {
            a[i - 1] = x;
            }
    }
    return a;
};

// 7. concat
export let concat = (a: number[], b: number[]): number[] => {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c[i] = a[i];
    }
    for ( let i = 0; i < b.length; i++) {
        c[c.length] = b[i];
    }
    return c;
};

// 8. sub
export let sub = (a: number[], startIndex: number, endIndex: number): number[] => {
    let b: number[] = [];
    let j = 0;
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > a.length) {
        endIndex = a.length;
    }
    for (let i = startIndex; i < endIndex; i++, j++) {
        b[j] = a[i];
    }
    return b;
};

// 9. splice
export let splice = (a: number[], x: number, b: number[]): number[] => {
    let c: number[] = [];
    if (x < 0) {
        x = 0;
    }
    if (x > a.length) {
        x = a.length;
    }
    c = sub(a, 0, x);
    c = concat(c, b);
    return concat(c, sub(a, x, a.length));
};