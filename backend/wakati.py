from typing import List
import MeCab

def wakati(tweetsList):
    wakati = MeCab.Tagger("-Owakati")
    wakatiList = []
    print("start wakati")
    for n in tweetsList:
        words = wakati.parse(n).split()
        wakatiList.append(words)
    print("end wakati")
    return wakatiList

