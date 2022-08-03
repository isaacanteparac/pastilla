from traceback import print_tb
import requests

alphabet = "http://127.0.0.1:5000/i/ctlg/alphabet"
symptom = "http://127.0.0.1:5000/i/ctlg/symptom"
sales = "http://127.0.0.1:5000/i/ctlg/sales"
recipe = "http://127.0.0.1:5000/i/ctlg/recipe"
pharmaceuticalForms = "http://127.0.0.1:5000/i/ctlg/pharmaceutical+forms"

userInputAlphabet = 0

def getDB(url, text_):
    global userInputAlphabet
    response = requests.get(url)
    dataJson = response.json()
    alldata = {"data": dataJson}
    print(text_)
    for data in alldata['data']:
        id_ = data["id"]
        name = data["name"]
        print(f"> {id_} =  {name}")



def ctlgAlphabet(url):
    global userInputAlphabet
    getDB(url, f"seleccione una letra del alfabeto")
    userInputAlphabet = int(input("ingrese el numero de la opcion: "))

def ctlgSimptom(url):
    global userInputAlphabet
    url = f"{url}/{userInputAlphabet}"
    getDB(url, f"seleccione el simtoma con la letra {userInputAlphabet}")
    userInputSymptom = int(input("ingrese el numero de la opcion: "))
    requests.get(f"http://127.0.0.1:5000/i/query/symptom/{userInputSymptom}")


def ctlgSales(url):
    getDB(url, "seleccione el tipo de venta")
    userInputSales = int(input("ingrese el numero de la opcion: "))
    requests.get(f"http://127.0.0.1:5000/i/query/sales/{userInputSales}")


def ctlgRecipe(url):
    getDB(url, "seleccione el tipo recceta medica")
    userInputRecipe = int(input("ingrese el numero de la opcion: "))
    requests.get(f"http://127.0.0.1:5000/i/query/recipe/{userInputRecipe}")


def ctlgPharmaceuticalForms(url):
    getDB(url, "seleccione el tipo de forma farmaceutica")
    userInputPharmaceuticalForms = int(input("ingrese el numero de la opcion: "))
    requests.get(f"http://127.0.0.1:5000/i/query/pharmaceutical+forms/{userInputPharmaceuticalForms}")




def main():
    ctlgAlphabet(alphabet)
    ctlgSimptom(symptom)
    ctlgSales(sales)
    ctlgRecipe(recipe)
    ctlgPharmaceuticalForms(pharmaceuticalForms)

main()