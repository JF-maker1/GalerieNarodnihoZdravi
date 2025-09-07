# init_db.py
from app import app, db, Uzivatel

# Data, která chceme vložit
data = [
    {'jmeno': 'Jirka', 'vyska': 180},
    {'jmeno': 'Petr', 'vyska': 175},
    {'jmeno': 'Jana', 'vyska': 168},
    {'jmeno': 'Karel', 'vyska': 182}
]

with app.app_context():
    print("Mažu starou databázi (pokud existuje)...")
    db.drop_all()
    print("Vytvářím novou databázi...")
    db.create_all()

    print("Vkládám data...")
    for item in data:
        novy_uzivatel = Uzivatel(jmeno=item['jmeno'], vyska=item['vyska'])
        db.session.add(novy_uzivatel)

    db.session.commit()
    print("Hotovo!")
