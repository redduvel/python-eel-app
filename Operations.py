class Credit:
    def __init__(self, number, amount, rate, term):
        self.number = number
        self.amount = amount
        self.rate = rate
        self.term = term
        self.payments = []
        self.status = "open"

    def make_payment(self, amount):
        self.payments.append(amount)
        if sum(self.payments) >= self.amount:
            self.status = "closed"

    def calculate_monthly_payment(self):
        return (self.amount * self.rate) / (1 - (1 + self.rate) ** (-self.term))

    def remaining_balance(self):
        return self.amount - sum(self.payments)

    @staticmethod
    def get_credit_from_file(string):
        credit_str = string.split(',')


class Deposit:
    def __init__(self, number, amount, rate, term):
        self.number = number
        self.amount = amount
        self.rate = rate
        self.term = term

    def calculate_interest(self):
        return self.amount * self.rate * self.term

    def maturity_amount(self):
        return self.amount + self.calculate_interest()

    @staticmethod
    def get_deposit_from_file(string):
        deposit_str = string.split(',')
