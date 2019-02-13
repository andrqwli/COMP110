import { print } from "introcs";

class Node {
    v: number = 0;
    l: Node = null;
    r: Node = null;
}

export let main = async () => {
    let root = new Node();
    root.v = 20;
   
    root.l = new Node();
    root.l.v = 10;

    root.r = new Node();
    root.r.v = 30;

    root.l.l = new Node();
    root.l.l.v = 5;

    root.l.r = new Node();
    root.l.r.v = 15;

    print(has(root, 15));
};

let has = (n: Node, v: number): boolean => {
    if (n === null) {
        return false;
    } else if (n.v === v) {
        // Break here!
        return true;
    } else if (v < n.v) {
        print("Smaller! looking left...");
        return has(n.l, v);
    } else {
        print("Bigger! Looking right...");
        return has(n.r, v);
    }
};

main();