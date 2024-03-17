function createAccount(pin, amount = 0) {
    return {
      checkBalance(input) {
        if (input !== pin) return "Invalid PIN."
        return `$${amount}`
      },
      deposit(input, amountDeposit) {
        if (input !== pin) return "Invalid PIN.";
        amount += amountDeposit;
        return `Succesfully deposited $${amountDeposit}. Current balance: $${amount}.`
      },
      withdraw(input, amountWithdraw) {
        if (input !== pin) return "Invalid PIN."
        if (amountWithdraw > amount)
          return "Withdrawal amount exceeds account balance. Transaction cancelled."
        amount -= amountWithdraw
        return `Succesfully withdrew $${amountWithdraw}. Current balance: $${amount}.`
      },
      changePin(oldPin, newPin) {
        if (oldPin !== pin) return "Invalid PIN."
        pin = newPin
        return "PIN successfully changed!"
      }
    };
  }
  
  module.exports = { createAccount };
  