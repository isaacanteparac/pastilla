from flask import Flask
from flask_mysqldb import MySQL


#pip install flask
#pip install flask_mysqldb

#flask run
app = Flask(__name__)

user = "universidad"
password = "universidad"
nameDB = "pastilla"


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'universidad'
app.config['MYSQL_PASSWORD'] = 'universidad'
app.config['MYSQL_DB'] = 'pastilla'
mysql = MySQL(app)




@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/alphabet')
def getAlphabet():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_alphabet"
        cursor.execute(sql)
        data = cursor.fetchall()
        print(data)
        return "ok"
    except Exception as ex:
        return "error"



def noData(error):
    return "<h1>NO DATA TO DISPLAY HAS BEEN FOUND 🥲</h1>"


if __name__ == "__main__":
    app.register_error_handler(404, noData)
    app.run(debug=True)