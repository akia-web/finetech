import asyncio
from pyppeteer import launch

# # URL de la page à scraper
# url = 'https://www.boursedirect.fr/fr/marche/seance'

# # Effectuer une requête HTTP pour récupérer le contenu de la page
# response = requests.get(url)

# # Vérifier si la requête a réussi (code 200)
# if response.status_code == 200:
#     # Utiliser Beautiful Soup pour parser le contenu HTML
#     soup = BeautifulSoup(response.text, 'html.parser')

#     # Exemple: Extraire tous les liens de la page
#     names = soup.find_all(class_='indices')
#     div = soup.find(class_='list-table-theme')

#     if div:
#             # Accéder aux enfants de la balise parente

#             children = div.find_all(class_='bd-streaming')
#             # print(children.__getattribute__)

#             # Afficher le contenu des enfants
#             for child in children:
#             #    indice = child.get('data-name')
#                indice = child.find(class_='indices')
#                courrant = child.find(class_='variation')
#                print(indice.text)
#                print(courrant)
#             #    indice = child.find(class_='indices')
#             #    print(indice.text)
#                 # print(indice)
#     else:
#             print("Balise parente non trouvée.")
    
#     # # Afficher les liens
#     # for name in names:
#     #     # print(link.get('href'))
#     #     print(name.text)
    
#     # for last in lasts:
#     #     print(last.text)
# else:
#     print(f"Échec de la requête HTTP avec le code {response.status_code}")


   

#### PUPETEER
async def scrape_data(url):
    browser = await launch()
    page = await browser.newPage()
    await page.goto(url)

    try:
        # Attendez que l'élément avec la classe 'list-table-theme' soit présent
        div_selector = '.list-table-theme'
        await page.waitForSelector(div_selector)

        div = await page.querySelector(div_selector)
        element_handle = await div.asElement()

        # Utilisez outerHTML() pour obtenir le code HTML
        if element_handle:
            outer_html = await page.evaluate('(element) => element.outerHTML', element_handle)
            print(f"Balise parente trouvée: {outer_html}")
        
        # Accédez aux enfants de la balise parente
        children_selectors = '.bd-streaming'
        children = await page.querySelectorAll(children_selectors)

        # Afficher le contenu des enfants
        for child in children:
            # Obtenez le texte de chaque enfant
            indice_selector = '.indices'
            courrant_selector = '.variation'

            indice = await child.querySelector(indice_selector)
            courrant = await child.querySelector(courrant_selector)

            if indice:
                print(f"Indice: {await indice.innerText()}")
            
            if courrant:
                print(f"Courant: {await courrant.innerText()}")

    finally:
        await browser.close()

if __name__ == '__main__':
    url = 'https://www.boursedirect.fr/fr/marche/seance'
    asyncio.run(scrape_data(url))