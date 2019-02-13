import { print } from "introcs";

class Node {
    val: number = 0;
    left: Node = null;
    right: Node = null;
    constructor(val: number) {
        this.val = val;
    }

    insert(n: number): void {
        if (this === null || this.val === n) {
            return;
        } else if (n > this.val) {
            let right = this.right;
            if (right === null) {
                right = new Node(n);
            } else {
                right.insert(n);
            }
        } else {
            let left = this.left;
            if (left === null) {
                this.left = new Node(n);
            } else {
                left.insert(n);
            }
        }
    }
}

export let main = async() => {
    let root = new Node(5);
    root.insert(3);
    root.insert(4);
    root.insert(7);
    print(root.left.val);
    print(root.right.val);
    print(root.left.right.val);
};

main();