'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */
describe('Basic math', function() {
    test('should add numbers correctly', function() {
        //javascript
        let result = 1+1;

        // assertion
        expect(result).toEqual(2);
    })
})

describe('invertCase() function', function() {
    test('letter case should be interveted', function() {
        let test = "my NAME is Michelle";
        let expectedResult = "MY name IS mICHELLE";
        let result = invertCase(test);

        expect(expectedResult).toEqual(result);
    })
})