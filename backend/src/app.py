from flask import Flask

from .routes.__init__ import routes


app = Flask(__name__)

app.register_blueprint(routes)


if __name__ == "__main__":
    app.run()