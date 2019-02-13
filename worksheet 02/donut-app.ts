class Donut {
    glazed: boolean = false;
    flavor: string = "chocolate";
    sprinkles: boolean = false;
    sprinklesAmount: number = 20;
    filling: boolean = false;
    cost: number = 1.50;
}

import { print } from "introcs";

export let main = async () => {
    let setSprinkles = (D: Donut): Donut => {
        let D1 = new Donut();
        if (D.sprinkles) {
            D1.sprinklesAmount = 30;
        }   else {
            D1.sprinklesAmount = 0;
        }
        return D1;
    };
};

main();
