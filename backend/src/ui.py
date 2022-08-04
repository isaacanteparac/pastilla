from os import system
import requests
import time

alphabet = "http://127.0.0.1:5000/i/ctlg/alphabet"
symptom = "http://127.0.0.1:5000/i/ctlg/symptom"
sales = "http://127.0.0.1:5000/i/ctlg/sales"
recipe = "http://127.0.0.1:5000/i/ctlg/recipe"
pharmaceuticalForms = "http://127.0.0.1:5000/i/ctlg/pharmaceutical+forms"
stateMatter = "http://127.0.0.1:5000/i/ctlg/state+matter"
typePharma = "http://127.0.0.1:5000/i/ctlg/type+pharma"

userInputAlphabet = 0
userInputPharmaceuticalForms = 0
userInputStateMatter = 0
executionTime = 0
completionTime = 0



def getDB(url, text_):
    global userInputAlphabet
    response = requests.get(url)
    dataJson = response.json()
    alldata = {"data": dataJson}
    print(text_)
    for data in alldata['data']:
        id_ = data["id"]
        name = data["name"]
        print(f"    > {id_} =  {name}")


def ctlgAlphabet(url):
    global userInputAlphabet
    getDB(url, f"seleccione una letra del alfabeto")
    userInputAlphabet = isInt()


def ctlgSimptom(url):
    global userInputAlphabet, executionTime, completionTime
    url = f"{url}/{userInputAlphabet}"
    getDB(url, f"seleccione el simtoma")
    userInputSymptom = isInt()
    executionTime = time.time()
    v = requests.get(
        f"http://127.0.0.1:5000/i/query/symptom/{userInputSymptom}")
    completionTime = time.time()
    isStr(v)


def ctlgSales(url):
    global executionTime, completionTime
    getDB(url, "seleccione el tipo de venta")
    userInputSales = isInt()
    executionTime += time.time()
    v = requests.get(f"http://127.0.0.1:5000/i/query/sales/{userInputSales}")
    completionTime += time.time()
    isStr(v)


def ctlgRecipe(url):
    global executionTime, completionTime
    getDB(url, "seleccione el tipo receta medica")
    userInputRecipe = isInt()
    executionTime += time.time()
    v = requests.get(f"http://127.0.0.1:5000/i/query/recipe/{userInputRecipe}")
    completionTime += time.time()
    isStr(v)


def ctlgPharmaceuticalForms(url):
    global userInputPharmaceuticalForms, executionTime, completionTime
    getDB(url, "seleccione el tipo de forma farmaceutica")
    userInputPharmaceuticalForms = isInt()
    executionTime += time.time()
    v = requests.get(
        f"http://127.0.0.1:5000/i/query/pharmaceutical+forms/{userInputPharmaceuticalForms}")
    completionTime += time.time()
    isStr(v)


def ctlgStateMatter(url):
    global userInputStateMatter, executionTime, completionTime
    getDB(url, "seleccione el tipo de material")
    userInputStateMatter = isInt()
    executionTime += time.time()
    v = requests.get(
        f"http://127.0.0.1:5000/i/query/state+matter/{userInputStateMatter}")
    completionTime += time.time()
    isStr(v)


def ctlgTypePharma(url):
    global userInputStateMatter, userInputPharmaceuticalForms, executionTime, completionTime
    data = {"id_ctlg_pharmaceutical_forms": userInputPharmaceuticalForms,
            "id_ctlg_state_matter": userInputStateMatter}
    response = requests.get(url, params=data)
    dataJson = response.json()
    alldata = {"data": dataJson}
    print("seleccione el tipo de farmaco")
    for data in alldata['data']:
        id_ = data["id"]
        name = data["name"]
        print(f"    > {id_} =  {name}")
    userInputTypePharma = isInt()
    executionTime += time.time()
    v = requests.get(
        f"http://127.0.0.1:5000/i/query/type+pharma/{userInputTypePharma}")
    completionTime += time.time()
    viewMedicine(v)
    print(f"TIEMPO TOTAL {(completionTime - executionTime)}")


def viewMedicine(response):
    print(F"\n++++++++++++ MEDICINAS ++++++++++\n")
    dataJson = response.json()
    for data in dataJson['medicine']:
        name = data["name"]
        description = data["description"]
        print(f"    NOMBRE DE MEDICAMENTO:")
        print(f"        {name}")
        print(f"            DESCRIPCION:")
        print(f"                {description}\n")
    print(f"+++++++++++++++++++++++++++++++++++")


def isInt():
    int_ = 0
    try:
        int_ = int(input("ingrese el numero de la opcion: "))
    except ValueError:
        print("Esto no es un numero")
        isInt()
    finally:
        if(int_ > 0):
            return int_
        else:
            return isInt()


def isStr(v):
    str_ = ""
    try:
        str_ = str(input("\nDesea visualizar los medicamentos si o no: "))
    except ValueError:
        print("Esto no es un si o no")
        isStr(v)
    finally:
        if(str_ == "si" or str_ == "SI"):
            viewMedicine(v)
        elif (str_ == "no" or str_ == "NO"):
            return str_
        else:
            isStr(v)


def name():
    system("cls")
    print("██████   █████   ██████ ████████ ██ ██      ██       █████ ")
    print("██   ██ ██   ██ ██         ██    ██ ██      ██      ██   ██ ")
    print("██████  ███████  █████     ██    ██ ██      ██      ███████ ")
    print("██      ██   ██      ██    ██    ██ ██      ██      ██   ██ ")
    print("██      ██   ██ ██████     ██    ██ ███████ ███████ ██   ██ ")


def main():
    name()
    ctlgAlphabet(alphabet)
    ctlgSimptom(symptom)
    ctlgSales(sales)
    ctlgRecipe(recipe)
    ctlgPharmaceuticalForms(pharmaceuticalForms)
    ctlgStateMatter(stateMatter)
    ctlgTypePharma(typePharma)


main()
