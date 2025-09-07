# app.py - Pure Backend API for Render
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# Základní nastavení cesty k projektu
basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)

# CORS pro komunikaci s Framer frontendem
CORS(app, origins=["*"])  # Pro development - později omezit na Framer doménu

# Konfigurace pro SQLite databázi
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Definice databázového modelu
class Uzivatel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jmeno = db.Column(db.String(80), nullable=False)
    vyska = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return f'<Uživatel {self.jmeno}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'jmeno': self.jmeno,
            'vyska': self.vyska
        }

# ==================== API ENDPOINTS ====================

# Root endpoint - info o API
@app.route('/')
def api_info():
    return jsonify({
        'message': 'Galerie Národního Zdraví - Backend API',
        'version': '1.0',
        'status': 'active',
        'endpoints': {
            'GET /api/uzivatele': 'Získat všechny uživatele',
            'GET /api/uzivatele/hledat?jmeno=xyz': 'Hledat podle jména',
            'POST /api/uzivatele': 'Přidat nového uživatele',
            'DELETE /api/uzivatele/<id>': 'Smazat uživatele',
            'GET /api/health': 'Health check'
        }
    })

# Health check endpoint
@app.route('/api/health')
def health_check():
    try:
        # Test databázového připojení
        count = Uzivatel.query.count()
        return jsonify({
            'status': 'healthy',
            'database': 'connected',
            'users_count': count
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'database': 'disconnected',
            'error': str(e)
        }), 500

# Získat všechny uživatele
@app.route('/api/uzivatele', methods=['GET'])
def get_all_users():
    try:
        uzivatele = Uzivatel.query.all()
        return jsonify({
            'success': True,
            'data': [u.to_dict() for u in uzivatele],
            'count': len(uzivatele)
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Hledat uživatele podle jména
@app.route('/api/uzivatele/hledat', methods=['GET'])
def search_users():
    try:
        jmeno = request.args.get('jmeno', '').strip()
        
        if jmeno:
            # Hledání obsahuje zadaný text (case insensitive)
            uzivatele = Uzivatel.query.filter(
                Uzivatel.jmeno.ilike(f'%{jmeno}%')
            ).all()
        else:
            uzivatele = Uzivatel.query.all()
        
        return jsonify({
            'success': True,
            'data': [u.to_dict() for u in uzivatele],
            'count': len(uzivatele),
            'search_term': jmeno
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Přidat nového uživatele
@app.route('/api/uzivatele', methods=['POST'])
def add_user():
    try:
        data = request.get_json()
        
        if not data or not data.get('jmeno') or not data.get('vyska'):
            return jsonify({
                'success': False,
                'error': 'Chybí povinná pole: jmeno a vyska'
            }), 400
        
        novy_uzivatel = Uzivatel(
            jmeno=data.get('jmeno').strip(),
            vyska=int(data.get('vyska'))
        )
        
        db.session.add(novy_uzivatel)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'data': novy_uzivatel.to_dict(),
            'message': 'Uživatel byl přidán'
        }), 201
        
    except ValueError:
        return jsonify({
            'success': False,
            'error': 'Výška musí být číselná hodnota'
        }), 400
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Smazat uživatele
@app.route('/api/uzivatele/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        uzivatel = Uzivatel.query.get_or_404(user_id)
        db.session.delete(uzivatel)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': f'Uživatel {uzivatel.jmeno} byl smazán'
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'success': False,
        'error': 'Endpoint nenalezen'
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        'success': False,
        'error': 'Interní chyba serveru'
    }), 500

if __name__ == '__main__':
    app.run(debug=True)
