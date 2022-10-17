# Pastilla
![Captura de pantalla 2022-06-11 180219](https://user-images.githubusercontent.com/69361351/196085783-9079bedd-b60d-4f46-a2d2-680b859ea58e.png)


**INSTALL**

- [Xampp 8.1.6](https://www.apachefriends.org/es/download.html)
- [Python 3.10.4](https://www.python.org/downloads/)
- [Postman](https://www.postman.com/downloads/)
- [pip install flask](https://pypi.org/project/Flask/)
- [pip install flask_mysqldb](https://pypi.org/project/Flask-MySQLdb/)

**URLS**

- GET medicines http://127.0.0.1:5000/medicinas
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

**Type**
- 1 = capsulass
- 2 = tabletas/comprimidos
- 3 = gomas de mascar medicadas
- 4 = polvos para uso oral
- 5 = granuladas
- 6 = F.F semisolidas orales
- 7 = f.f liquidas orales
- 8 = preparacion inyectables esteriles de pequeño/gran volumen
- 9 = preparacion concentradas inyectables para perfusion
- 10 = polvos para inyectables o para perfusion
- 11 = implantes
- 12 = gotas nasales y aerosoles nasales
- 13 = liquido para lavado nasal
- 14 = barras para uso nasal
- 15 = polvos nasal
- 16 = preparaciones nasales semisolidas
- 17 = f.f liquidas para nebulizacion
- 18 = f.f para lavado nasal
- 19 = barras para uso nasal
- 20 = polvos nasales
- 21 = preparacion nasales semisolidas
- 22 = f.f oftalmicas liquidas
- 23 = f.f oftalmicas semisolidas
- 24 = f.f rectales solidas
- 25 = f.f rectales semisolidas
- 26 = f.f rectales liquidas
- 27 = ovulos/capsulas
- 28 = tabletas/comprimido vaginales
- 29 = f.f vaginales semisolidas
- 30 = f.f vaginales liquidas
- 31 = f.f cutaneas liquidas
- 32 = f.f cutaneas semisolidas
- 33 = f.f cutaneas solidas

**Time en ms**
- 100 datos = 0.040035247802734375
- 1000 datos = 0.08457756042480469
- 20612 datos = 1.8526954650878906
- 71418  datos = 1.897024154663086
- 100921 datos = 1.7672405242919922
- 205375 datos = 3.484729766845703
