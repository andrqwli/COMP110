import { print } from "introcs";
let main = () => {
    let arr = ["Sarah", "Phil", "Andre", "Shelby"];
    let pos: number = 3;
    sneak(arr, pos);
    print(arr);
    print(pos);
};

let sneak = (peep: string[], loc: number): void => {
    for (let i = 0; i < peep.length; i++) {
        if ( i === loc) {
            peep[i] = "Hank";
            sidekick(peep, loc + 1);
        }
    }
    print(loc);
};

let sidekick = (fa: string[], x: number): void => {
    if (fa[x - 1] === "Scott") {
        x++;
    }   else {
        fa[x] = "Scott";
    }
};

main();