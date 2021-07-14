from apiKeys.twitterAPI import ACCESS_SECRET, ACCESS_TOKEN, CONSUMER_KEY, CONSUMER_SECRET
import json
from requests_oauthlib import OAuth1Session
import pprint
import re


twitter = OAuth1Session(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_SECRET)

url = " https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="

# # print(tweets)

# for n in range(len(tweets)):
#     print("**************************************************************************")
#     print(tweets["results"][n]["user"]["name"])
#     print("@" + tweets["results"][n]["user"]["screen_name"])
#     print(tweets["results"][n]["text"])


def get_tweets(userId:str):
    print(userId)
    # test_tweet = [
    #     "なんちゃってプログラミング、パズルみたいにあれこれ指示を組み合わせてその通りの結果が出るとめちゃくちゃ気持ちいいな…天才になった気分になれる…",
    #     "RT @keikinishida: Tansaさんのストリングスアレンジ/プログラミングが素敵すぎなので、是非注目して聴いてください！ https://t.co/zEkyN4ZOq8",
    #     "RT @gijigae: これは、子供たちにプログラミングを教える上でも大変効果的な方法✨。面白いし、結果を見てどんな改善が必要なのか考えるのでアルゴリズムの基礎が学べる。",
    #     "まじあいつキモイ死ね。",
    #     "死ね、キモい、殺す",
    #     "AAAを殺したい"
    # ]
    return_tweets =[]
    params = {"maxResults" : "100"}
    print(params)
    queryUrl = url + userId[1:]
    res = twitter.get(queryUrl, params = params)
    print(res)
    tweets = res.json()
    print(tweets)
    for n in range(len(tweets)):
        print(tweets[n]["text"])
        return_tweets.append(tweets[n]["text"])

    return return_tweets
