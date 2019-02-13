import { Node, listify, cons, rest, first } from "introcs/list";
import { filter, map, Reducer, reduce, Predicate, Transform } from "./fmr-utils";
import { print } from "introcs";

let list = listify(1, 2, 3, 4, 5);
export let reverse = <T>(list: Node<T>): Node<T> => {
    return reverseRecur(list, null);
};
export let reverseRecur = <T>(list: Node<T>, out: Node<T>): Node<T> => {
    if (rest(list) === null) {
        out = cons(first(list), out);
        return out;
    } else {
        return reverseRecur(rest(list), cons(first(list), out));
    }
};

export let main = () => {
    print(reverseRecur(list, null));
};

main();