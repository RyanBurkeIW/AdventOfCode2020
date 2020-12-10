import input from './input';
import expenseResolver from '../src/index';

describe('The Expense Resolver', () => {
    describe('When given a number total of 2 and input', () => {
        it('should return the multiplication of a pair which when summed totals 2020', () => {
            expect(expenseResolver(2, input)).toBe(927684)
        });
    });

    describe('When given a number total of 3 and input', () => {
        it('should return the multiplication of a trio which when summed totals 2020', () => {
            expect(expenseResolver(3, input)).toBe(292093004)
        });
    });
});