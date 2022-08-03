from traceback import print_tb
import requests

alphabet = "http://127.0.0.1:5000/i/ctlg/alphabet"
symptom = "http://127.0.0.1:5000/i/ctlg/symptom"


userInputAlphabet = 0


def ctlgAlphabet(url):
    global userInputAlphabet
    response = requests.get(url)
    dataJson = response.json()
    alldata = {"data": dataJson}
    print("seleccione una letra del allfabeto")
    for data in alldata['data']:
        id_ = data["id"]
        name = data["name"]
        print(f"> {id_} =  {name}")
    userInputAlphabet = int(input("ingrese el numero de la opcion: "))

def ctlgSimptom(url):
    global userInputAlphabet
    url = f"{url}/{userInputAlphabet}"
    response = requests.get(url)
    dataJson = response.json()
    alldata = {"data": dataJson}
    print(f"seleccione el simtoma con la letra {userInputAlphabet}")
    for data in alldata['data']:
        id_ = data["id"]
        name = data["name"]
        print(f"> {id_} =  {name}")
    userInputAlphabet = int(input("ingrese el numero de la opcion: "))



ctlgAlphabet(alphabet)
ctlgSimptom(symptom)