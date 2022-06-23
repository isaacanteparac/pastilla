from . import routes

@routes.route('/')
def sat():
    print("hola")
    return 4