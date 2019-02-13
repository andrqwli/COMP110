import { print } from "introcs";

export let main = async () => {
    let nums = [];
    let a = 3;
    let b = 0;
    let c;
    if (b === 0) {
        while (nums.length < 4) {
            c = a + b / 2;
            if (c % 2 === 0) {
                a++;
                b--;
            }   else {
                nums[nums.length] = a;
                a += 3;
            }
        }
    }
    print(nums);
    print("a is " + a);
    print("b is " + b);
    print("c is " + c);








};

main();

