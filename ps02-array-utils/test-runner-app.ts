// TODO: Add Honor Code Header

/** Import Test Helpers */
import { testNumber, testArray, testBoolean } from "./test-util";

// TODO: Import functions as you write them
import { count, max, all } from "./array-utils";

export let main = async () => {
    
    // Part 1. count
    // Use Cases
    testNumber("count([10, 20], 20)", 1, count([10, 20], 20));
    testNumber("count([20, 20], 20)", 2, count([20, 20], 20));
    // Edge Cases
    testNumber("count([], 20)", 0, count([], 20));
    testNumber("count([10, 30], 20)", 0, count([10, 30], 20));

    // TODO: Add tests for parts as you work through each
    // 2. max
    testNumber("max([])", Number.MIN_VALUE, max([]));

    // 4. all
    testBoolean("all([1, 0, 0], 1)", false, all([1, 0, 0], 1));
    testBoolean("all([], 1)", false, all([], 1));

};
// max, has, all, equals, cycle, concat, sub, splice 
main();