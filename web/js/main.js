document.addEventListener('DOMContentLoaded', () => {
    const client_block = document.getElementById('client-info');
    const credit_block = document.getElementById('credit-info');
    const deposit_block = document.getElementById('deposit-info');

    // get the button and input block
    const transferButton = document.getElementById('open-transfer-button');
    const transferSubmitButton = document.getElementById('submit-transfer-button');
    const transferBlock = document.getElementById('transfer-info');

    const open_credit_button = document.getElementById('open-credit-window');
    open_credit_button.addEventListener('click', () => {
        client_block.style.left = 'calc(-50% - 225px)';
        credit_block.style.left = 'calc(50% - 225px)';

        hidden_transfer();
    });

    const open_main_button = document.getElementById('credit-btn-cancel');
    open_main_button.addEventListener('click', () => {
        client_block.style.left = 'calc(50% - 225px)';
        credit_block.style.left = 'calc(-50% - 225px)';

        hidden_transfer();
    });

    const open_deposit_button = document.getElementById('open-deposit-window');
    open_deposit_button.addEventListener('click', () => {
        client_block.style.left = 'calc(-50% - 225px)';
        deposit_block.style.left = 'calc(50% - 225px)';

        hidden_transfer();
    });

    const close_deposit_button = document.getElementById('deposit-btn-cancel');
    close_deposit_button.addEventListener('click', () => {
        client_block.style.left = 'calc(50% - 225px)';
        deposit_block.style.left = 'calc(-50% - 225px)';

        hidden_transfer();
    });

    // add a click event listener to the button
    transferButton.addEventListener('click', () => {
        // toggle the visibility of the input block
        if (transferBlock.style.transform === 'translateY(0px)') {
            transferBlock.style.transform = 'translateY(425px)';
        } else {
            transferBlock.style.transform = 'translateY(0px)';
        }
    });
    transferSubmitButton.addEventListener('click', () => {
        // toggle the visibility of the input block
        if (transferBlock.style.transform === 'translateY(0px)') {
            transferBlock.style.transform = 'translateY(425px)';
        } else {
            transferBlock.style.transform = 'translateY(0px)';
        }
    });
    function hidden_transfer(){
        if (transferBlock.style.transform === 'translateY(0px)') {
            transferBlock.style.transform = 'translateY(425px)';
        }
    }
});


class Account {
    constructor(username, number, balance, credits, deposits) {
        this.username = username;
        this.number = number;
        this.balance = balance;
        this.credits = credits;
        this.deposits = deposits;
    }
}
function update_element() {
    let account = eel.get_account()(create_account);

}
function create_account(data) {
    console.log(data);
    let account = new Account(data[0], data[1], data[2], data[3], data[4]);
    set_element(account);
    console.log(account);
    return account;
}
function set_element(account) {
    document.getElementById('username').innerHTML = `Добро пожаловать, ${account.username}!`;
    document.getElementById('balance').innerHTML = `Баланс - ${account.balance}`;
    document.getElementById('number').innerHTML = account.number;
}
function open_credit_window() {
    document.getElementById('main-info').style.visibility = "hidden";
    document.getElementById('credit-info').style.visibility = "visible";
}
function calculateLoan() {
    // Get user input
    var loanAmount = document.getElementById("loanAmount").value;
    var interestRate = document.getElementById("interestRate").value / 100 / 12;
    var loanLength = document.getElementById("loanLength").value;

    // Calculate monthly payment and total overpayment
    var x = Math.pow(1 + interestRate, loanLength);
    var monthlyPayment = (loanAmount*x*interestRate)/(x-1);
    var totalOverpayment = (monthlyPayment * loanLength) - loanAmount;

    // Display results
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("totalOverpayment").innerHTML = totalOverpayment.toFixed(2);
}
function calculateDeposit() {
  // Get user input
  var initialAmount = parseFloat(document.getElementById("initialAmount").value);
  var interestRate = parseFloat(document.getElementById("interestDepositRate").value);
  var investmentLength = parseFloat(document.getElementById("investmentLength").value);

  // Calculate total earned interest and total value at maturity
  var totalInterest = initialAmount * (Math.pow(1 + (interestRate / 100), investmentLength) - 1);
  var totalValue = initialAmount + totalInterest;

  console.log(totalValue);
  // Display results
  document.getElementById("totalInterest").innerHTML = totalInterest.toFixed(2);
  document.getElementById("totalValue").innerHTML = parseFloat(totalValue).toFixed(2);
}
