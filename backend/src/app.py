from flask import Flask, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'universidad'
app.config['MYSQL_PASSWORD'] = 'universidad'
app.config['MYSQL_DB'] = 'pastilla'
mysql = MySQL(app)




@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/i/ctlg/alphabet')
def getAlphabet():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_alphabet"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id":row[0], "name":row[1]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message":"error"})


@app.route('/i/ctlg/recipe')
def getRecipe():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_recipe"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id":row[0], "name":row[1]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message":"error"})

@app.route('/i/ctlg/sales')
def getSales():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_sales"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id":row[0], "name":row[1]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message":"error"})

@app.route('/i/ctlg/state+matter')
def getStateMatter():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_state_matter"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id":row[0], "name":row[1]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message":"error"})


@app.route('/i/ctlg/pharmaceutical+forms')
def getPharmaceuticalForms():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_pharmaceutical_forms"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id":row[0], "name":row[1]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message":"error"})



@app.route('/i/ctlg/type+pharma')
def getTypePharma():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_type_pharma"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id":row[0], "name":row[1]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message":"error"})



if __name__ == "__main__":
    app.run(debug=True)