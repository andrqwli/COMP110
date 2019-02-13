/**    
 * Author: Andrew Li
 * ONYEN: andrqwli    
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

import { Node, cons, first, rest } from "introcs/list";
import { print } from "introcs"
;
export let last = <T> (list: Node<T>): T => {
    if (list === null) {
        return null;
    }
    if (list.next === null) {
        return first(list);
    } else {
        return last(rest(list));
    }
};

export let valueAt = <T> (list: Node<T>, index: number): T => {
    if (list === null) {
        return null;
    }
    if (index === 0) {
        return first(list);
    }
    return valueAt(rest(list), index - 1);
};

export let max = (list: Node<number>, record: number): number => {
    let maxVal = record;
    if (list === null) {
        return maxVal;
    }
    if (first(list) > maxVal) {
        maxVal = first(list);
    }
    return max(rest(list), maxVal);
};

export let all = <T> (list: Node<T>, value: T): boolean => {
    if (list === null) {
        return true;
    }
    if (first(list) !== value) {
        return false;
    }
    if (list.next === null) {
        return true;
    }
    return all(rest(list), value);
};

export let equals = <T> (a: Node<T>, b: Node<T>): boolean => {
    if (a === null && b === null) {
        return true;
    }
    if (a === null || b === null) {
        return false;
    }
    if (first(a) !== first(b)) {
        return false;
    }
    if (a.next === null && b.next === null) {
        return true;
    }
    return equals(rest(a), rest(b));
};

export let scale = (list: Node<number>, factor: number): Node<number> => {
    if (list === null) {
        return null;
    }
    let newList = first(list) * factor;
    return cons(newList, scale(rest(list), factor));
};

// Part 7. arrayToList
export let arrayToList = <T> (arr: T[], num: number): Node<T> => {
    if (arr.length === num) { 
        return null; 
    }
    let newList = arr[num];
    return cons(newList, arrayToList(arr, num + 1));
};
// Part 8. concat
export let concat = <T> (a: Node<T>, b: Node<T>): Node<T> => {
    if (a === null) { 
        return b;
    }
    if (a.next === null) { 
        return concat(rest(a), cons(first(a), b));
    } else {return cons(first(a), concat(rest(a), b)); }
};
// Part 9. sub
export let sub = <T> (list: Node<T>, start: number, length: number): Node<T> => {
    if (list === null) {
        return null;
    }
    if (0 < start) {
        return sub(rest(list), start - 1, length);
    } else if (length > 0) {
        let listFinal = cons(first(list), sub(rest(list), start, length - 1));
        return listFinal;
    }
    return null;
};
// Part 10. splice
export let splice = <T> (listOne: Node<T>, index: number, listTwo: Node<T>): Node<T> => {
    if (listOne === null) {
        return listTwo;
    } else if (listTwo === null) {
        return listOne;
    }
    let partOne = concat(sub(listOne, 0, index), listTwo);
    if (valueAt(listOne, index) === null) {
        return partOne;
    }
    return concat(partOne, sub(listOne, index, Number.MAX_VALUE));
};