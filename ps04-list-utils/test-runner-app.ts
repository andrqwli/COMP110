/**    
 * Author: Andrew Li   
 * ONYEN: andrqwli   
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

/** Import Test Helpers */
import { print } from "introcs";
import { cons, listify } from "introcs/list";
import { test, testList } from "./test-util";

// TODO: Import functions as you write them
import { 
    last, 
    valueAt, 
    max,
    all,
    equals,
    scale,
    arrayToList,
    concat,
    sub,
    splice
} from "./list-utils";

export let main = async () => {
    
    print("List Utils Tests");

    // Some simple lists data to test with.
    // You should add your own lists, too!
    let numbers1 = cons(1, null);
    let numbers12 = cons(1, cons(2, null));
    let numbers121 = cons(1, cons(2, cons(1, null)));
    let numbers363 = cons(3, cons(6, cons(3, null)));
    let numbers24 = cons(2, cons(4, null));
    let numbers123 = cons(1, cons(2, cons(3, null)));
    let numbers456 = cons(4, cons(5, cons(6, null)));
    let numbers123456 = cons(1, cons(2, cons(3, cons(4, cons(5, cons(6, null))))));
    let numbers12345678 = cons(1, cons(2, cons(3, cons(4, cons(5, cons(6, cons(7, cons(8, null))))))));
    let numbers789 = listify(7, 8, 9);
    let numbers123789456 = listify(1, 2, 3, 7, 8, 9, 4, 5 , 6);

    let stringsA = cons("A", null);
    let stringsAB = cons("A", cons("B", null));
    let stringsABC = cons("A", cons("B", cons("C", null)));

    // This constant is an alias for the smallest number possible.
    const MIN = Number.MIN_SAFE_INTEGER;

    // ================================    
    // Part 1. last
    // print("Part 1. last");
    // Use Cases
    test("1.1 last(numbers1)", 1, last(numbers1));
    test("1.2 last(numbers12)", 2, last(numbers12));
    test("1.3 last(stringsA)", "A", last(stringsA));
    test("1.4 last(stringsAB)", "B", last(stringsAB));
    // Edge Cases
    test("1.5 last(null)", null, last(null)); 

    // ================================    
    // Part 2. valueAt
    print("Part 2. valueAt");
    // Use Cases
    test("2.1 valueAt(numbers121, 0)", 1, valueAt(numbers121, 0));
    test("2.2 valueAt(numbers121, 1)", 2, valueAt(numbers121, 1));
    test("2.3 valueAt(numbers121, 2)", 1, valueAt(numbers121, 2));
    test("2.4 valueAt(stringsABC, 0)", "A", valueAt(stringsABC, 0));
    test("2.5 valueAt(stringsABC, 1)", "B", valueAt(stringsABC, 1));
    test("2.6 valueAt(stringsABC, 2)", "C", valueAt(stringsABC, 2));
    // Edge Cases
    test("2.7 valueAt(numbers121, 3)", null, valueAt(numbers121, 3));
    test("2.8 valueAt(numbers121, -1)", null, valueAt(numbers121, -1));

    // ================================
    // Part 3. max
    // Use Cases
    print("Part 3. max");
    test("3.1 max(numbers1, MIN)", 1, max(numbers1, MIN));
    test("3.2 max(numbers121, MIN)", 2, max(numbers121, MIN));
    // Edge Cases
    test("3.2 max(null, MIN)", MIN, max(null, MIN));

    // TODO - You will need to write your own tests from here.*/

    // ================================
    // Part 4. all
    print("Part 4. all");
    // Use Cases - note, you will need to import this (and subsequent) function!
    test("4.1 all(numbers 1)", true, all(numbers1, 1));
    test("4.2 all(numbers121, 1)", false, all(numbers121, 1));
    // Edge Cases
    test("4.3 all(null, 1)", true, all(null, 1));
    // ================================
    // Part 5. equals
    print("Part 5. equals");
    // Use Cases
    test("5.1 equals(numbers121, numbers 121)", true, equals(numbers121, numbers121));
    test("5.2 equals(numbers121, numbers 363)", false, equals(numbers121, numbers363));
    // Edge Cases

    /** 
     * Ensure your equals function is correctly implemented before 
     * continuing further!
     */

    // ================================
    // Part 6. scale
    print("Part 6. scale");
    // Use Cases
    // One example is shown below:
    testList("scale(numbers121, 3)", numbers363, scale(numbers121, 3));
    testList("scale(numbers12, 2)", numbers24, scale(numbers12, 2));
    // Edge Cases
    
    // ================================
    // Part 7. arrayToList
    print("Part 7. arrayToList");
    // Use Cases
    testList("arrayToList([2, 4], 0)", numbers24, arrayToList([2, 4], 0));
    testList("arrayToList([1, 2, 1], 0)", numbers121, arrayToList([1, 2, 1], 0));
    
    // Edge Cases
    // ================================
    // Part 8. concat
    print("Part 8. concat");
    // Use Cases
    // testList("concat(numbers12, numbers1)", numbers121, concat(numbers12, numbers1));
    testList("concat(numbers123, numbers456)", numbers123456, concat(numbers123, numbers456));
    testList("concat(numbers12, numbers1)", numbers121, concat(numbers12, numbers1));
    // Edge Cases

    // ================================
    // Part 9. splice
    print("Part 9. splice");
    // Use Cases
    testList("sub(numbers123456, 3, 3)", numbers456, sub(numbers123456, 3, 3));
    testList("sub(numbers12345678, 3, 3)", numbers456, sub(numbers12345678, 3, 3));
    testList("sub(numbers121, 0, 1)", numbers1, sub(numbers121, 0, 1));
    testList("sub(numbers123456, 0, 6)", numbers123456, sub(numbers123456, 0, 6));
    // Edge Cases

    // ================================
    // Part 10. sub
    print("Part 10. sub");
    // Use Cases
    testList("splice(numbers123456, 3, numbers789)", numbers123789456, splice(numbers123456, 3, numbers789));
    testList("splice(numbers123, 3, numbers456)", numbers123456, splice(numbers123, 3, numbers456));
    // Edge Cases
    testList("splice(numbers123, 0, null)", numbers123, splice(numbers123, 0, null));
    testList("splice(null, 0, numbers123", numbers123, splice(null, 0, numbers123));
};

main();