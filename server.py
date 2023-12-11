import socket

# Configuration du serveur
host = '127.0.0.1'  # Adresse IP locale
port = 8080         # Port d'écoute du serveur

# Création d'une socket serveur
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Liaison de la socket à l'adresse et au port spécifiés
server_socket.bind((host, port))

# Définition du nombre maximal de connexions en attente
server_socket.listen(5)
print(f"Le serveur écoute sur {host}:{port}...")

while True:
    # Attente d'une connexion
    client_socket, client_address = server_socket.accept()
    print(f"Connexion entrante de {client_address}")

    # Réception de données du client
    data = client_socket.recv(1024)
    if not data:
        break

    # Traitement des données (remplacez cela par votre logique métier)
    print(f"Données reçues du client: {data.decode('utf-8')}")

    # Réponse au client
    response = "Message reçu par le serveur"
    client_socket.sendall(response.encode('utf-8'))

    # Fermeture de la connexion avec le client
    client_socket.close()

# Fermeture de la socket serveur
server_socket.close()