from flask import Flask
#pip install flask
#pip install mysql-connector-python
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/ctlg/sitomas')
def symphone():
    return 'Hello, World!'