from flask import Flask, jsonify
from flask_cors import CORS 
from article import getarticles

app = Flask(__name__)
CORS(app)

totalArticle = 0
totalNegatifArticle = 0
totalPositifArticle = 0

# Route Flask pour /articles
@app.route('/articles')
def get_articles_stats():
    global totalArticle, totalNegatifArticle, totalPositifArticle

    # Construction de l'objet JSON avec les statistiques
    result = getarticles()

    # Renvoi de la réponse au format JSON
    return jsonify(result)

# Exécution de l'application Flask
if __name__ == '__main__':
    host = '127.0.0.1'  # Adresse IP locale
    port = 8080         # Port d'écoute du serveur

    print(f"Le serveur écoute sur {host}:{port}...")
    app.run(host=host, port=port)