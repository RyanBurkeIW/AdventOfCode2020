import input from './input';
import {passwordValidatorV1, passwordValidatorV2} from '../src/index';

describe('PasswordValidatorV1', () => {
    describe('When given a input of passwords & policy policy strings', () => {
        it('should return the total passwords valid based on their policy', () => {
            expect(passwordValidatorV1(input)).toBe(506);
        });
    });

});

describe('PasswordValidatorV2', () => {
    describe('When given a input of passwords & policy policy strings', () => {
        it('should return the total passwords valid based on their policy', () => {
            expect(passwordValidatorV2(input)).toBe(443);
        });
    });

});