from flask import Flask
import MySQLdb
from flask_mysqldb import MySQL


#pip install flask
#pip install mysql-connector-python
app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root_ia'
app.config['MYSQL_PASSWORD'] = 'root_ia'
app.config['MYSQL_DB'] = 'syin'
mysql = MySQL(app)

app.secret_key = 'mysecretkey'

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/ctlg/sitomas')
def symphone():
    return 'Hello, World!'