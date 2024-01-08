export function calculate (n1, n2, operator) {
    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default: 
            return 'no such operator';
    }
}

console.log(calculate(3,4, '+'));