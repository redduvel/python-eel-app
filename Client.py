from Operations import Credit, Deposit
import pandas as pd


class Account:
    def __init__(self, number=None, username=None, balance=None, credits=None, deposits=None):
        self.number = number
        self.username = username
        self.balance = balance
        self.credits = credits
        self.deposits = deposits

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

    def transfer(self, to, amount):
        self.balance -= amount
        to.balance += amount

    def add_credit(self, amount, rate, term):
        credit = Credit(len(self.credits) + 1, amount, rate, term)
        self.credits.append(credit)

    def add_deposit(self, amount, rate, term):
        deposit = Deposit(len(self.deposits) + 1, amount, rate, term)
        self.deposits.append(deposit)


class AccountManager:
    def __init__(self):
        self.accounts = None

    def load_accounts(self, filename):
        self.accounts = pd.read_excel(filename)
        self.accounts.index = self.accounts['Number'].tolist()

    def save_accounts(self, filename):
        pass

    def get_account(self, number):
        current_row = self.accounts.loc[int(number), :].tolist()
        return Account(current_row[0],
                       current_row[1],
                       current_row[3],
                       Credit.get_credit_from_file(current_row[4]),
                       Deposit.get_deposit_from_file(current_row[5]))
