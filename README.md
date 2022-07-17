# Pastilla

**INSTALL**

- [Xampp 8.1.6](https://www.apachefriends.org/es/download.html)
- [Python 3.10.4](https://www.python.org/downloads/)
- [pip install flask](https://pypi.org/project/Flask/)
- [pip install flask_mysqldb](https://pypi.org/project/Flask-MySQLdb/)

**URLS**

- GET catalogo de alphabet http://127.0.0.1:5000/i/ctlg/alphabet
- GET catalogo de recipe http://127.0.0.1:5000/i/ctlg/recipe
- GET catalogo de sales http://127.0.0.1:5000/i/ctlg/sales
- GET catalogo de state matter http://127.0.0.1:5000/i/ctlg/state+matter
- GET catalogo de pharmaceutical forms http://127.0.0.1:5000/i/ctlg/pharmaceutical+forms
- GET catalogo de type pharma http://127.0.0.1:5000/i/ctlg/type+pharma

**IMPORT DATA TO THE DATABASE**
- Json
- CSV

**EXECUTION OF THE BACK-END**
- Ingresar al folder backend
- Luego al folder src
- Escribir en la consola lo siguiente flask run

**FUNCTIONING**
- seleccion de letra del sintoma, luego seleccion del sintoma en especifico
    EJEM a,b,c,
            seleccion A
        lista de sintomas que inicien con la letra A
            seleccioon dolor en articulacion

- tipo de analesicos
    Ejem
        como pastilla, inyeccion, parche
            seleccion de el analgesico


- formas de ventas
    ejemplo
        con recesta medica o sin receta medica
            seleccion receta medica

- Formas farmaceuticas
    ejemplo
        orales, rectales, nasales,etc
            seleccion orales

- tipos name(orales)
    ejemplo
        solido, liquido y semi solido
            seleccion solido

- tipos name(solidos)
    ejemplo
        lista de tabletas,polvo, capsulas,etc
            seleccion capsula

- tipos de name(capsula)
    ejemplo
        lista de duras, blandas, gastronomicas,etc
            seleccion duras

- comercial o generico
    ejemplo
        lista de comercial y generico
            seleccion comercial

- lista de medicamentos name(comercial)
    ejemplo
        todos los medicamentos comerciales
        fin
