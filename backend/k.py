from xml.dom.minidom import Element

import json




def m(d):
    with open('kl.json') as file:
        data = { "clients":json.load(file)}
        for client in data['clients']:
            if(d  == client['name']):
                return client

s = m("g")
print(s)
