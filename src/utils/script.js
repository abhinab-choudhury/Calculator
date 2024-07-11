class calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = this.tokenize(expression);
    this.result = this.parseExpression(tokens);
  }

  tokenize(expression) {
    const tokens = [];
    let numBuffer = "";

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (/\s/.test(char)) {
        continue; // Skip whitespace
      }

      if (/\d/.test(char) || char === '.') {
        numBuffer += char;
      } else {
        if (numBuffer) {
          tokens.push(Number(numBuffer));
          numBuffer = "";
        }

        if ("+-*/()".includes(char)) {
          tokens.push(char);
        } else {
          throw new Error("Invalid character in expression");
        }
      }
    }

    if (numBuffer) {
      tokens.push(Number(numBuffer));
    }

    return tokens;
  }

  parseExpression(tokens) {
    let index = 0;

    const parsePrimary = () => {
      const token = tokens[index];

      if (typeof token === "number") {
        index++;
        return token;
      } else if (token === "(") {
        index++;
        const value = parseAddSubtract();
        if (tokens[index] !== ")") {
          throw new Error("Mismatched parentheses");
        }
        index++;
        return value;
      } else {
        throw new Error("Unexpected token");
      }
    };

    const parseMultiplyDivide = () => {
      let value = parsePrimary();

      while (index < tokens.length) {
        const token = tokens[index];

        if (token === "*") {
          index++;
          value *= parsePrimary();
        } else if (token === "/") {
          index++;
          const divisor = parsePrimary();
          if (divisor === 0) {
            throw new Error("Cannot divide by zero");
          }
          value /= divisor;
        } else {
          break;
        }
      }

      return value;
    };

    const parseAddSubtract = () => {
      let value = parseMultiplyDivide();

      while (index < tokens.length) {
        const token = tokens[index];

        if (token === "+") {
          index++;
          value += parseMultiplyDivide();
        } else if (token === "-") {
          index++;
          value -= parseMultiplyDivide();
        } else {
          break;
        }
      }

      return value;
    };

    return parseAddSubtract();
  }
}

// Example usage
const calc = new calculator();
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calc.getResult()); // Output should be the result of the expression

export default calculator