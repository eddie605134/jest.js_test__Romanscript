export function sum(a, b) {
  return a + b ;
}

export function subtract(a, b) {
  return a - b ;
}

export const bankAccount = {
  income: 1000,
  expense: 500,
  getBalance () {
    return {
      balance: this.income - this.expense
    }
  }
}