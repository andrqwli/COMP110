export let concat = (a: number[], b: number[]): number[] => {
    let c = a;
    for ( let i = 0; i < b.length; i++) {
        c[c.length] = b[i];
    }
    return c;
};

export let sub = (a: number[], startIndex: number, endIndex: number): number[] => {
    let b: number[] = [];
    let j = 0;
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > a.length) {
        endIndex = a.length;
    }
    for (let i = startIndex; i < endIndex; i++, j++) {
        b[j] = a[i];
    }
    return b;
};