// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// new ////
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should be a defined function', function () {
        expect(typeof sayHello()).toBe('string');
    });

    it('should return the string "Hello, Alex" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });

    it('should return the string "Hello, Alex" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });

    it('should return the string "Hello, Pat" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World" when executed', function() {
        expect(sayHello()).toBe("Hello, World!")
    });
});

// isFive//
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('is five return true when 5 is passed', function() {
        expect(isFive("5")).toEqual(true)
    });
});

//isEven//
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
});

//isVowel//
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
});

//isVowel//
describe('Add', function() {
    it('should be a defined function', function() {
        expect(typeof Add).toBe('function');
    });
    it('should return boolean', function () {
        expect(typeof Add()).toBe('number');
    });
});




