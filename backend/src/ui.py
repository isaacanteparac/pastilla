from traceback import print_tb
import requests

alphabet = "http://127.0.0.1:5000/i/ctlg/alphabet"
symptom = "http://127.0.0.1:5000/i/ctlg/symptom"


def ctlgAlphabet(url, url2):
    response = requests.get(url)
    dataJson = response.json()
    alldata = {"data": dataJson}
    print("seleccione una letra del allfabeto")
    for data in alldata['data']:
        id = data["id"]
        name = data["name"]
        print(f"> {id} =  {name}")
    userInput = int(input("ingrese el numero de la opcion: "))
    requests.post(url2, data = {'id_ctlg_alphabet':userInput})
    view = requests.get(url2)
    view = view.json()
    print(view)





ctlgAlphabet(alphabet, symptom)