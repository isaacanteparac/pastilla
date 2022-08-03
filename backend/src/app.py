
from flask import Flask, jsonify, request
from flask_mysqldb import MySQL



app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'universidad'
app.config['MYSQL_PASSWORD'] = 'universidad'
app.config['MYSQL_DB'] = 'pastilla'
mysql = MySQL(app)

allData = {}


@app.route('/')
def hello_world():
    return 'Hello, World!'


# --------------TITLE:SINTOMAS----------------
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


@app.route('/i/ctlg/symptom/<letter>')
def getSymptom(letter):
    global allData
    try:
        letterAlphabet = int(letter)
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_symptom"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "id_ctlg_alphabet": row[2], "create_": row[3],
                 "update_": row[4], "delete_": row[5]}
            n = int(d["id_ctlg_alphabet"])
            if(letterAlphabet == n):
                jsson.append(d)
    except Exception as ex:
        return jsonify({"message": "error"})
    finally:
        dm = divMedicine()
        allData = {"medicine": dm}
        return jsonify(jsson)


@app.route('/i/query/symptom/<id>')
def getIdSymptom(id):
    global allData
    try:
        idSymptom = int(id)
        dm = divMedicine()
        am = []
        allData = {"medicine": dm}
        for medicine in allData['medicine']:
            if(idSymptom == medicine["id_ctlg_symptom"]):
                am.append(medicine)
        if(len(am) > 0):
            allData = {"medicine": am}
    except Exception as ex:
        return jsonify({"message": "error"})
    finally:
        return jsonify(allData)
# --------------------------------------------


# -----------TITLE:SALES----------------------
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


@app.route('/i/query/sales/<id>')
def getIdSales(id):
    global allData
    try:
        idSales = int(id)
        am = []
        for medicine in allData['medicine']:
            if(idSales == medicine["id_ctlg_sales"]):
                am.append(medicine)
        if(len(am) > 0):
            allData = {"medicine": am}
    except Exception as ex:
        return jsonify({"message": "error"})
    finally:
        return jsonify(allData)
# -------------------------------------------


# ------------------TITLE:RECIPE---------------
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


@app.route('/i/query/recipe/<id>')
def getIdRecipe(id):
    global allData
    try:
        idRecipe = int(id)
        am = []
        for medicine in allData['medicine']:
            if(idRecipe == medicine["id_ctlg_recipe"]):
                am.append(medicine)
        if(len(am) > 0):
            allData = {"medicine": am}
    except Exception as ex:
        return jsonify({"message": "error"})
    finally:
        return jsonify(allData)
# -----------------------------------------------


# -------------TITLE: PHARMACEUTICAL FORMS----------
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


@app.route('/i/query/pharmaceutical+forms/<id>')
def getIdPharmaceuticalForms(id):
    global allData
    try:
        idPharmaceuticalForms = int(id)
        am = []
        for medicine in allData['medicine']:
            if(idPharmaceuticalForms == medicine["id_ctlg_pharmaceutical_forms"]):
                am.append(medicine)
        if(len(am) > 0):
            allData = {"medicine": am}
    except Exception as ex:
        return jsonify({"message": "error"})
    finally:
        return jsonify(allData)
# ----------------------------------------------------


# -----------TITLE:STATE MATTER----------------------
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


@app.route('/i/query/state+matter/<id>')
def getIdStateMatter(id):
    global allData
    try:
        idStateMatter = int(id)
        am = []
        for medicine in allData['medicine']:
            if(idStateMatter == medicine["id_ctlg_state_matter"]):
                am.append(medicine)
        if(len(am) > 0):
            allData = {"medicine": am}
    except Exception as ex:
        return jsonify({"message": "error"})
    finally:
        return jsonify(allData)
# ---------------------------------------------------


# ---------------TITLE: TYPE PHARMA-------------------
@app.route('/i/ctlg/type+pharma')
def getTypePharma():
    try:
        pharmaceutical_forms = int(
            request.args.get("id_ctlg_pharmaceutical_forms"))
        state_matter = int(request.args.get("id_ctlg_state_matter"))
        print(pharmaceutical_forms, state_matter)
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM ctlg_type_pharma"
        cursor.execute(sql)
        data = cursor.fetchall()
        jsson = []
        for row in data:
            d = {"id": row[0], "name": row[1], "type": row[2],
                 "id_ctlg_pharmaceutical_forms": row[3], "id_ctlg_state_matter": row[4], "create_": row[5], "update_": row[6], "delete_": row[7]}
            id_ctlg_pharmaceutical_forms = int(
                d["id_ctlg_pharmaceutical_forms"])
            id_ctlg_state_matter = int(d["id_ctlg_state_matter"])
            if((pharmaceutical_forms == id_ctlg_pharmaceutical_forms) and (state_matter == id_ctlg_state_matter)):
                jsson.append(d)
        return jsonify(jsson)

    except Exception as ex:
        return jsonify({"message": "error"})


@app.route('/i/query/type+pharma/<id>')
def getIdTypePharma(id):
    global allData
    try:
        idTypePharma = int(id)
        am = []
        for medicine in allData['medicine']:
            if(idTypePharma == medicine["id_ctlg_type_pharma"]):
                am.append(medicine)
        if(len(am) > 0):
            allData = {"medicine": am}
    except Exception as ex:
        return jsonify({"message": "error"})
    finally:
        return jsonify(allData)
# ---------------------------------------------------


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


def divMedicine():
    cursor = mysql.connection.cursor()
    sql = "SELECT * FROM medicine"
    cursor.execute(sql)
    data = cursor.fetchall()
    jsson = []
    for row in data:
        d = {"id": row[0], "name": row[1], "description": row[2], "id_ctlg_sales": row[3],
             "id_ctlg_recipe": row[4], "id_ctlg_symptom": row[5], "id_ctlg_state_matter": row[6], "id_ctlg_pharmaceutical_forms": row[7],
             "id_ctlg_type_pharma": row[8], "create_": row[9], "update_": row[10], "delete_": row[11]}
        jsson.append(d)
    return jsson


if __name__ == "__main__":
    app.run(debug=True)



#input 2 2 1 2
