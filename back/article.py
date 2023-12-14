import requests
import feedparser
import requests
from textblob import TextBlob
from textblob_fr import PatternTagger, PatternAnalyzer


def getSentiment(text):
    if text>0:
       return 'positif'
    else:
        return 'negatif'
    
def searchWordInSetence(sentence):
    search = ["schneider", "bitcoin", "btc"]
    for word in search:
        if word in sentence:
            return word


def getText(description, title):
    if '<a' in description:
        return title
    else:
        return description

def getarticles():

    infoArticle = []
    tableauFluxRss = [
    'https://www.abcbourse.com/rss/displaynewsrss', 
    'https://services.lesechos.fr/rss/investir-actualites-valeurs.xml',
    'https://services.lesechos.fr/rss/budget.xml',
    'https://services.lesechos.fr/rss/investir-conseils-boursiers.xml',
    'https://www.abcbourse.com/rss/chroniquesrss',
    'https://www.abcbourse.com/rss/lastanalysisrss',
    'https://www.tradingsat.com/rssbourse.xml',
    'https://coinjournal.net/fr/actualites/feed/',
    'https://coinjournal.net/fr/actualites/category/marches/feed/'

    ]

    for entryFlux in tableauFluxRss:
        getFlux = requests.get(entryFlux, verify=False)
        news_feed = feedparser.parse(getFlux.text)
        for entry in news_feed.entries:
            print(entry.published)
            statisques = {
                'name': '',
                'totalArticle' : 0,
                'totalNegatifArticle': 0,
                'totalPositifArticle': 0,
                'articles': []
            }
            doPush = True
            isWordInSentence = searchWordInSetence(entry.title.lower())
            
            if isWordInSentence and 'description' in entry:
                if len(infoArticle)>0:
                    for statisque in infoArticle:
                        if statisque["name"] == isWordInSentence:
                            statisques = statisque
                            doPush = False
                        else: 
                            doPush = True    
                else:
                    doPush = True            
                
                text = getText(entry.description, entry.title)
                blob = TextBlob(entry.title, pos_tagger=PatternTagger(), analyzer=PatternAnalyzer())
                sentiment = getSentiment(blob.sentiment[0])
                if sentiment == 'positif':
                    statisques['totalPositifArticle'] += 1
                else:
                    statisques['totalNegatifArticle'] += 1
                date = entry.published
                cuteDate = date.find("2023")
                trimmed_string = date[:cuteDate + 4]
                statisques['name']= isWordInSentence
                statisques['totalArticle'] += 1
                statisques['articles'].append({'title': entry.title, 'description': entry.description, 'link':entry.link, "time": trimmed_string})
                if doPush:
                    infoArticle.append(statisques)
                print(infoArticle)
    return infoArticle


