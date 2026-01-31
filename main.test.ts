import { romanToInt } from './main.js';

describe('Roman to Integer Conversion - Assignment Cases', () => {
    test('should convert "MMVI" to 2006', () => {
        expect(romanToInt("MMVI")).toBe(2006);
    });

    test('should convert "MCMXLIV" to 1944', () => {
        expect(romanToInt("MCMXLIV")).toBe(1944);
    });

    test('should convert "MCMIII" to 1903', () => {
        expect(romanToInt("MCMIII")).toBe(1903);
    });

});

describe('Roman to Integer Conversion - Extra Edge Cases', () => {

    test('should handle simple addition like "VIII" (8)', () => {
        expect(romanToInt("VIII")).toBe(8);
    });

    test('should handle complex subtraction like "MCMXCIV" (1994)', () => {
        expect(romanToInt("MCMXCIV")).toBe(1994);
    });

    test('should return 0 for an empty string', () => {
        expect(romanToInt("")).toBe(0);
    });

    test('should handle all subtraction rules', () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
    });

});