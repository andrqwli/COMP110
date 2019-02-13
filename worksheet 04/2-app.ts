import { print } from "introcs";

class Node {
    data: string = "";
    next: Node = null;
}

export let main = async () => {
    let a = new Node();
    a.data = "A";

    a.next = new Node();
    a.next.data = "B";

    a.next.next = new Node();
    a.next.data = "C";
    print(a === null);
    print(a.next === null);
    print(a.next.next === null);
    print(a.next.next.next === null);
    

    visit(a);
};

let visit = (n: Node): void => {
    if (n === null) {
        // Break here!
    } else {
        visit(n.next);
        print(n.data);
    }
};

main();