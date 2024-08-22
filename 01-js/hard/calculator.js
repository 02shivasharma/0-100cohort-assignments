/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        return this; // Enable method chaining
    }

    subtract(number) {
        this.result -= number;
        return this; // Enable method chaining
    }

    multiply(number) {
        this.result *= number;
        return this; // Enable method chaining
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Dividing by Zero");
        }
        this.result /= number;
        return this // Enable method chaining
    }

    clear() {
        this.result = 0;
        return this; // Enable method chaining
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        try {
            // Remove all continuous spaces
            expression = expression.replace(/\s+/g, '');

            // Check for invalid characters
            if (/[^0-9+\-*/().]/.test(expression)) {
                throw new Error("Invalid characters in expression");
            }

            // Use the eval function to evaluate the arithmetic expression
            this.result = eval(expression);
        } catch (error) {
            throw new Error("Invalid expression");
        }
        return this; // Enable method chaining
    }
}

// Example usage:
// const calc = new Calculator();

// console.log(calc.add(10).subtract(2).multiply(5).divide(4).getResult()); // 10

// calc.clear();
// console.log(calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7").getResult()); // 20

// // Test cases for error handling
// try {
//     calc.calculate("10 + 2 * abc");
// } catch (error) {
//     console.log(error.message); // Invalid characters in expression
// }

// try {
//     calc.calculate("10 + 2 / 0");
// } catch (error) {
//     console.log(error.message); // Division by zero is not allowed (thrown by eval)
// }

module.exports = Calculator;
