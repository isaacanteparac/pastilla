
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
            d = {"id": row[0], "name": row[1], "create_": row[2],
                 "update_": row[3], "delete_": row[4]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/i/ctlg/recipe')
def getRecipe():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_recipe"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "create_": row[2],
                 "update_": row[3], "delete_": row[4]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/i/ctlg/sales')
def getSales():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_sales"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "create_": row[2],
                 "update_": row[3], "delete_": row[4]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/i/ctlg/state+matter')
def getStateMatter():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_state_matter"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "create_": row[2],
                 "update_": row[3], "delete_": row[4]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/i/ctlg/pharmaceutical+forms')
def getPharmaceuticalForms():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_pharmaceutical_forms"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "create_": row[2],
                 "update_": row[3], "delete_": row[4]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/i/ctlg/type+pharma')
def getTypePharma():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_type_pharma"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "type": row[2],
                 "id_ctlg_pharmaceutical_forms": row[3], "id_ctlg_state_matter": row[4], "create_": row[5], "update_": row[6], "delete_": row[7]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/i/ctlg/medicines')
def getMedicine():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM medicine"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "description": row[2], "id_ctlg_sales": row[3], "id_ctlg_recipe": row[4], "id_ctlg_symptom": row[5],
                 "id_ctlg_state_matter": row[6], "id_ctlg_pharmaceutical_forms": row[7], "id_ctlg_type_pharma": row[8], "create_": row[9], "update_": row[10], "delete_": row[11]}
            jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/medicinas')
def medicineSearch():
    data = request.get_json()
    symptom = data["id_ctlg_symptom"]
    recipe = data["id_ctlg_recipe"]
    sales = data["id_ctlg_sales"]
    state_matter = data["id_ctlg_state_matter"]
    pharmaceutical_forms = data["id_ctlg_pharmaceutical_forms"]
    type_pharma = data["id_ctlg_type_pharma"]

    cursor = mysql.connection.cursor()
    sql = "SELECT * FROM medicine"
    cursor.execute(sql)
    data = cursor.fetchall()
    jsson = []
    for row in data:
        d = {"id": row[0], "name": row[1], "description": row[2], "id_ctlg_sales": row[3], "id_ctlg_recipe": row[4], "id_ctlg_symptom": row[5],
             "id_ctlg_state_matter": row[6], "id_ctlg_pharmaceutical_forms": row[7], "id_ctlg_type_pharma": row[8], "create_": row[9], "update_": row[10], "delete_": row[11]}
        jsson.append(d)
    allMedicine = {"medicine": jsson}
    for medicine in allMedicine['medicine']:
        if((symptom == medicine["id_ctlg_symptom"]) and (recipe == medicine["id_ctlg_recipe"]) and (sales == medicine["id_ctlg_sales"]) and (state_matter == medicine["id_ctlg_state_matter"]) and (pharmaceutical_forms == medicine["id_ctlg_pharmaceutical_forms"]) and (type_pharma == medicine["id_ctlg_type_pharma"])):
            return jsonify([medicine])
        else:
            return jsonify({"message": "no se encontro medicamento"})



if __name__ == "__main__":
    app.run(debug=True)
