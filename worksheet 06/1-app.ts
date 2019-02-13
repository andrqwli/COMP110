class Cat {
    name: string;
    happiness: number = 50;
    hungry: boolean = true;
    purrVolume: number = 5;

    constructor(name: string) {
        this.name = name;
    }

    pet() {
        this.happiness += 5;
        this.purrVolume += 1;
    }

    feed() {
        this.hungry = false;
        this.happiness += 5;
    }

    play() {
        this.hungry = true;
        this.happiness += 10;
    }
}

let kitty = new Cat("Garfield");