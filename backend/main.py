from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import gensim
import gensim.models
from gensim.models import KeyedVectors
from get_tweets import get_tweets
from wakati import wakati
from tweet_evaluation import evaluation


app = FastAPI()
origins = [
    "http://localhost:3000"
]

#model = gensim.models.KeyedVectors.load_word2vec_format('machine_learn/ja.vec')
#you can run this app at backend directory with " source bin/activate && python main.py"

app.add_middleware(
    CORSMiddleware,
    allow_origins= ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/users/")
def read_user(user_id:str):
    return {"user_id":user_id[1:] + " is your user id"}

@app.post("/get_tweets/")
def pass_tweets(userId:str):
    print(userId)
    return_tweets = []
    tweetsList = get_tweets(userId)
    print(tweetsList)
    wakati_tweets = wakati(tweetsList)
    badTweets = evaluation(wakati_tweets)
    sorted_bad_tweets = sorted(badTweets.items(), key=lambda x:x[1], reverse=True)
    print(sorted_bad_tweets)
    for n in sorted_bad_tweets:
        return_tweets.append(tweetsList[n[0]])
        if len(return_tweets) > 2:
            break
    print(badTweets)
    print("--------------------------------------------------------")
    return return_tweets

@app.post("/all")
def all_tweet(userId:str):
    print(userId)
    return len(get_tweets(userId))

@app.post("/test/")
async def test(userId:str):
    tweetsList = get_tweets(userId)
    print(tweetsList)
    wakati_tweets = wakati(tweetsList)
    badTweets = evaluation(wakati_tweets)
    print(badTweets)
    return len(badTweets)

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, reload=True)