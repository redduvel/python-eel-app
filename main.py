import eel
from Client import Account, AccountManager

eel.init('web')

manager = AccountManager()
manager.load_accounts("source\\users.xlsx")


@eel.expose
def process_input(number, password):
    if int(number) in manager.accounts['Number'].tolist():
        if int(password) in manager.accounts['Password'].tolist():
            global current_account
            current_account = manager.get_account(number)
            validate_login = True
            login_info = ""
            return [validate_login, current_account, login_info]
        else:
            validate_login = False
            login_info = "Такого пользователя не существует"
            return [validate_login, login_info]
    else:
        validate_login = False
        login_info = "Пароль неверный или " \
                     "пользователя не существует"
        return [validate_login, login_info]


current_account = Account()


@eel.expose
def get_account():
    return [current_account.username,
            str(current_account.number),
            str(current_account.balance),
            current_account.credits,
            current_account.deposits]


eel.start('index.html')