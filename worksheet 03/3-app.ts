import { print } from "introcs";

class Foo {
    n: number = 0;
}

export let main = async() => {
    let n = 10;
    let a = [20];
    let o = new Foo();
    o.n = 30;

    fun(n, a, o);

    print(n + " " + a[0] + " " + o.n);
};

let fun = (n: number, a: number[], o: Foo): void => {
    n = n * 2;
    a = [20];
    a[0] = a[0] * 2;
    o = new Foo;
    print(o);
    o.n = 60;
    print(o);
    print(n + " " + a[0] + " " + o.n);
};

main();
