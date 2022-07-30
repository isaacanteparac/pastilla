
from flask import Flask, jsonify, request
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

@app.route('/medicinas')
def medicineSearch():
    data = request.get_json()
    symptom = data["id_ctlg_symptom"]
    recipe = data["id_ctlg_recipe"]
    sales = data["id_ctlg_state_matter"]
    pharmaceutical_forms = data["id_ctlg_pharmaceutical_forms"]
    type_pharma = data["id_ctlg_type_pharj"]

        
    return jsonify(data)
"""
postman  consulta get http://127.0.0.1:5000/medicinas
{
    "id_ctlg_symptom": 1,
    "id_ctlg_recipe": 2,
    "id_ctlg_sales":3,
    "id_ctlg_state_matter":666,
    "id_ctlg_pharmaceutical_forms": 5,
    "id_ctlg_type_pharma":6
}
"""

if __name__ == "__main__":
    app.run(debug=True)