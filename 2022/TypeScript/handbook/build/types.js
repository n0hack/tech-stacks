// Intersection Types
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello I'm ".concat(name));
    };
    return ConsoleLogger;
}());
var nana = extend(new Person('Nana'), ConsoleLogger.prototype);
nana.log(nana.name);
var people;
// people.next.name;
// people.next.next.next.next.name;
// Polymorthic 'this' types
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
console.log(new BasicCalculator(2).multiply(5).add(1).currentValue());
// Index types
// keyof는 인덱스 타입 쿼리 연산자
// T[K]는 인덱스 접근 연산자
function pluck(o, propertyNames) {
    return propertyNames.map(function (n) { return o[n]; });
}
var taxi = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
};
var makeAndModel = pluck(taxi, ['manufacturer', 'model']);
var modelAndYear = pluck(taxi, ['model', 'year']);
console.log(makeAndModel, modelAndYear);
var x = f(Math.random() < 0.5);
function foo(x) {
    var a = f(x);
    var b = a;
}
