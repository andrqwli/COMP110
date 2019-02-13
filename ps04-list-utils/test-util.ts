/*
 * You should not need to change the code below in this file.
 * 
 * This file contains two simplistic functions to help you 
 * test your array utility functions programatically.
 */

import { print } from "introcs";

import { Node } from "introcs/list";
import { equals } from "./list-utils"; // Notice we're using YOUR equals function!

export let testList = <T> (name: string, expected: Node<T>, actual: Node<T>): void => {
    let passed = equals(expected, actual);
    if (passed) {
        print("PASS: " + name);
    } else {
        print("FAIL: " + name);
        print("-- Expected: " + expected);
        print("-- Actually: " + actual);
    }
};

/**
 * This function is given a test name for diagnostic purposes.
 * 
 * It is then given a primitive value. This should be what your
 * test is *expecting* to be the correct result.
 * 
 * It is then given the actual value in question. This will be
 * compared with the expected value for equality.
 * 
 * If the two values are equal, then the test passes. If they are
 * different in any way, then the test fails.
 */
export let test = <T extends number | string | boolean | null> (name: string, expected: T, actual: T): void => {
    let passed = expected === actual;

    if (passed) {
        print("PASS: " + name);
    } else {
        print("FAIL: " + name);
        print("-- Expected: " + expected);
        print("-- Actually: " + actual);
    }
};