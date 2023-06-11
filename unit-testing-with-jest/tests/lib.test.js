const absolute = require('../lib').absolute;

describe('absolute',()=>{
    test('should return positive if input is positive',()=>{
        expect(absolute(-1)).toBe(1);
    });
    
    test('should return positive if input is negative',()=>{
        expect(absolute(-1)).toBe(1);
    });
    
    test('should return zero if zero',()=>{
        expect(absolute(0)).toBe(0);
    });
})
