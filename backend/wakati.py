from typing import List
import MeCab

def wakati(tweetsList):
    wakati = MeCab.Tagger("-Owakati")
    wakatiList = []
    for n in tweetsList:
        words = wakati.parse(n).split()
        wakatiList.append(words)
   
    return wakatiList

