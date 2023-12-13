import feedparser
from textblob import TextBlob
from textblob_fr import PatternTagger, PatternAnalyzer


def getSentiment(text):

    if text>0:
       return 'positif'
    else:
        return 'negatif'
    
def searchWordInSetence(sentence):
    search = ["schneider", "bitcoin", "btc", "sika", "cac40",]
    for word in search:
        if word in sentence:
            return word



def getarticles():
    infoArticle = []
    tableauFluxRss = [
    'https://www.abcbourse.com/rss/displaynewsrss', 
    'https://services.lesechos.fr/rss/investir-actualites-valeurs.xml',
    'https://services.lesechos.fr/rss/budget.xml',
    'https://services.lesechos.fr/rss/investir-conseils-boursiers.xml',
    'https://www.abcbourse.com/rss/chroniquesrss',
    'https://www.abcbourse.com/rss/lastanalysisrss'

    ]

    for entryFlux in tableauFluxRss:
        news_feed = feedparser.parse(entryFlux)
        for entry in news_feed.entries:
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

                blob = TextBlob(entry.description, pos_tagger=PatternTagger(), analyzer=PatternAnalyzer())
                sentiment = getSentiment(blob.sentiment[0])
                if sentiment == 'positif':
                    statisques['totalPositifArticle'] += 1
                else:
                    statisques['totalNegatifArticle'] += 1
                statisques['name']= isWordInSentence
                statisques['totalArticle'] += 1
                statisques['articles'].append({'title': entry.title, 'description': entry.description, 'link':entry.link})
                if doPush:
                    infoArticle.append(statisques)
                print(infoArticle)
    return infoArticle


