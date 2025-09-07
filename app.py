# app.py
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import os

# Základní nastavení cesty k projektu
basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
# Konfigurace pro SQLite databázi
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Definice databázového modelu (tabulky)
class Uzivatel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jmeno = db.Column(db.String(80), nullable=False)
    vyska = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Uživatel {self.jmeno}>'

# Hlavní cesta (route), která zobrazí naši stránku
@app.route('/')
def index():
    # Načtení všech uživatelů z databáze
    uzivatele = Uzivatel.query.all()
    # Předání dat do šablony index.html
    return render_template('index.html', uzivatele=uzivatele)

if __name__ == '__main__':
    app.run(debug=True)
