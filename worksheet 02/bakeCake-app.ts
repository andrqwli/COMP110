class CakeMix {
    flavor: string = "";
    sprinklesPerSqIn: number = 14;
}

class Cake {
    length: number = 0;
    width: number = 0;
    flavor: string = "";
    sprinkles: number = 0;
}

export let bakeCake = (mix: CakeMix, length: number, width: number): Cake => {
    let cake = new Cake();
    cake.flavor = mix.flavor;
    cake.length = length;
    cake.width = width;
    cake.sprinkles = length * width * mix.sprinklesPerSqIn;
    return cake;
};