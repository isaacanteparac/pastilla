from traceback import print_tb
import requests

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
    userInputAlphabet = int(input("ingrese el numero de la opcion: "))


def ctlgSimptom(url):
    global userInputAlphabet
    url = f"{url}/{userInputAlphabet}"
    getDB(url, f"seleccione el simtoma con la letra {userInputAlphabet}")
    userInputSymptom = int(input("ingrese el numero de la opcion: "))
    v = requests.get(
        f"http://127.0.0.1:5000/i/query/symptom/{userInputSymptom}")
    view = str(input("\nDesea visualizar los medicamentos si o no: "))
    if(view == "si" or view == "SI"):
        viewMedicine(v)


def ctlgSales(url):
    getDB(url, "seleccione el tipo de venta")
    userInputSales = int(input("ingrese el numero de la opcion: "))
    v = requests.get(f"http://127.0.0.1:5000/i/query/sales/{userInputSales}")
    view = str(input("\nDesea visualizar los medicamentos si o no: "))
    if(view == "si" or view == "SI"):
        viewMedicine(v)


def ctlgRecipe(url):
    getDB(url, "seleccione el tipo recceta medica")
    userInputRecipe = int(input("ingrese el numero de la opcion: "))
    v = requests.get(f"http://127.0.0.1:5000/i/query/recipe/{userInputRecipe}")
    view = str(input("\nDesea visualizar los medicamentos si o no: "))
    if(view == "si" or view == "SI"):
        viewMedicine(v)


def ctlgPharmaceuticalForms(url):
    global userInputPharmaceuticalForms
    getDB(url, "seleccione el tipo de forma farmaceutica")
    userInputPharmaceuticalForms = int(
        input("ingrese el numero de la opcion: "))
    v = requests.get(
        f"http://127.0.0.1:5000/i/query/pharmaceutical+forms/{userInputPharmaceuticalForms}")
    view = str(input("\nDesea visualizar los medicamentos si o no: "))
    if(view == "si" or view == "SI"):
        viewMedicine(v)


def ctlgStateMatter(url):
    global userInputStateMatter
    getDB(url, "seleccione el tipo de material")
    userInputStateMatter = int(input("ingrese el numero de la opcion: "))
    v = requests.get(
        f"http://127.0.0.1:5000/i/query/state+matter/{userInputStateMatter}")
    view = str(input("\nDesea visualizar los medicamentos si o no: "))
    if(view == "si" or view == "SI"):
        viewMedicine(v)


def ctlgTypePharma(url):
    global userInputStateMatter, userInputPharmaceuticalForms
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
    userInputTypePharma = int(input("ingrese el numero de la opcion: "))

    v = requests.get(
        f"http://127.0.0.1:5000/i/query/type+pharma/{userInputTypePharma}")
    viewMedicine(v)


def viewMedicine(response):
    print(F"\n++++++++++++ MEDICINAS ++++++++++\n")
    dataJson = response.json()
    for data in dataJson['medicine']:
        id_ = data["id"]
        name = data["name"]
        description = data["description"]
        print(f"    NOMBRE DE MEDICAMENTO:")
        print(f"        {name}")
        print(f"            DESCRIPCION:")
        print(f"                {description}\n")
    print(f"+++++++++++++++++++++++++++++++++++")


def main():
    ctlgAlphabet(alphabet)
    ctlgSimptom(symptom)
    ctlgSales(sales)
    ctlgRecipe(recipe)
    ctlgPharmaceuticalForms(pharmaceuticalForms)
    ctlgStateMatter(stateMatter)
    ctlgTypePharma(typePharma)


main()
