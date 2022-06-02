/* eslint-disable no-undef */
import { solution } from '../task1.js';

describe("A suite", function () {
    it('Can find first missing in all positive set', function () {
        expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
    });

    it('can find the number if its out of the range', function () {
        expect(solution([1, 2, 3])).toBe(4);
    });

    it('can find the number in an array of all negatives', function () {
        expect(solution([-1, -3])).toBe(1);
    });

    it('can find the number in a big array', function () {
        let array = [];
        for (let i = -10000000; i < 10000000; i++) {
            if (i % 13 === 0) {
                continue;
            }
            array.push(i);
        }
        expect(solution(array)).toBe(13);
    });

    it('worst case:', function () {
        let array = [];
        for (let i = -10000000; i <= 10000000; i++) {
            array.push(i);
        }
        expect(solution(array)).toBe(10000001);
    });

    it('reverse order:', function () {
        let array = [];
        for (let i = 100000; i >= -100000; i--) {
            array.push(i);
        }
        expect(solution(array)).toBe(100001);
    });

    it('random numbers:', function () {
        let array = [
            39, 34, 19, 15, 27, 29, 26, 28, 34, 28,
            3, 8, 19, 35, 35, 12, 22, 0, 14, 34,
            9, 20, 26, 7, 29, 31, 11, 12, 8, 10,
            33, 2, 11, 30, 31, 12, 5, 0, 33, 20
        ];

        expect(solution(array)).toBe(1);
    });

    it('random with negatives:', function () {
        let array = [
            27, -39, 3, -25, -0, 28, -0, -7, -23,
            19, -31, -25, 7, 10, 25, -5, 13, -14,
            29, -10, -17, -2, -29, -26, -2, 27, 2,
            2, 39, 2, 30, 30, -35, 15, 25, -19,
            -18, -7, 31, -14, 1
        ];

        expect(solution(array)).toBe(4);
    });
});
