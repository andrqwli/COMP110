import { Node, listify } from "introcs/list";
import { filter, map, Reducer, reduce, Predicate, Transform } from "./fmr-utils";
import { print } from "introcs";

let numbers = listify(2, 7, 5, 6, 3, 9);
let booleans = listify(true, false, false, true, false);
let strings = listify("Thanksgiving", "fall", "chilly", "pie", "dinner");

let f1 = (s: string): boolean => { return s[3] === "n"; };
let f2 = (n: number): boolean => { return n % 4 === 1; };
let f3 = (b: boolean): boolean => { return !b; };
let f4 = ( s: string): number => { return s.length; };
let f5 = (n: number): number => { return n * 2; };
let f6 = (s: string): string => { return s[2]; };
let f9 = (s: string, t: string): string => { return s + t; };

export let main = async() => {
    print(filter(booleans, f3));
    print(map(filter(numbers, f2), f5));
    print(reduce(filter(strings, f1), f9, ""));
    print(map(strings, f4));
    print(filter(map(numbers, f5), f2));
    print(reduce(map(strings, f6), f9, ""));
};

main();