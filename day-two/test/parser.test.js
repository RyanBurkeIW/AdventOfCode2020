import { expect } from '@jest/globals';
import {parserV1, parserV2} from '../tools/parser';
import input from './input';
import expectedV1 from './formattedV1.data.js';
import expectedV2 from './formattedV2.data.js';

describe('ParserV1', () => {
    describe('Given an array of policy & password strings', () => {
        it('should return a clean object containing min and max', () => {
            expect(parserV1(input)).toEqual(expectedV1)
        });
    });
});

describe('ParserV2', () => {
    describe('Given an array of policy & password strings', () => {
        it('should return a clean object containing first and second index', () => {
            expect(parserV2(input)).toEqual(expectedV2)
        });
    });
});