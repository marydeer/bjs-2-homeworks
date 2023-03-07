"use strict"

const solveEquation = (a, b, c) => {
  const discriminant = ((b ** 2) - 4 * a * c);
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a),
    (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
}

//const testCase = (a, b, c) => console.log(solveEquation(a, b, c));
//testCase(15, 345, 6);

const calculateTotalMortgage = (percent, constribution, amount, countMonths) => {
  if (isNaN(percent) === true ||
    isNaN(constribution) === true ||
    isNaN(amount) === true ||
    isNaN(countMonths) === true)
    return false;
  else {
    percent = (percent / 100) / 12;
    const loanBody = (amount - constribution);
    const payment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    const totalLoan = (payment * countMonths);
    return Number(totalLoan.toFixed(2));
  }
}

//const testCase = (a, b, c, d) => console.log(calculateTotalMortgage(a, b, c, d));
//tastCase (10, 0, 50000, 12);
//tastCase (10, 1000, 50000, 12);
//tastCase (10, 0, 20000, 24);
//tastCase (10, 1000, 20000, 24);
//tastCase (10, 20000, 20000, 24);
//tastCase (10, 0, 10000, 36);
//tastCase (15, 0, 10000, 36);