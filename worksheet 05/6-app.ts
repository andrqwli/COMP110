import { Node, listify } from "introcs/list";
import { filter, map, Reducer, reduce, Predicate, Transform } from "./fmr-utils";
import { print } from "introcs";

let select = (x: string) => {
    return x.length === 4 || x.length === 8;
};

let oddEven = (x: number) => x % 2 === 1;

let questions = (x: string) => x + "??";

let len = (x: string) => x.length;

let c1 = (m: string, e: string): string => {
    return m + " " + e;
};

let c2 = (m: string, e: number): string => {
    return e + " " + m;
};

let mult = (m: number, e: number): number => {
    return m * e;
};

let main = () => {
    let coolNewList: Node<string> = listify("What", "happened", "to", "our", "water");
    print(reduce(map(filter(coolNewList, select), questions), c1, ""));
    print(reduce(filter(map(coolNewList, len), oddEven), mult, 1));
    print(reduce(map(coolNewList, len), c2, "!"));
    print(map(map(filter(coolNewList, select), len), (x) => x + 5));
};

main();