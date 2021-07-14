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

@app.get("/get_tweets/")
def pass_tweets():
    tweetsList = get_tweets()
    print(tweetsList)
    wakati_tweets = wakati(tweetsList)
    badTweets = evaluation(wakati_tweets)
    return len(badTweets)

@app.get("/test/")
async def test():
    tweetsList = get_tweets()
    print(tweetsList)
    wakati_tweets = wakati(tweetsList)
    badTweets = evaluation(wakati_tweets)
    print(badTweets)
    return len(badTweets)

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000, reload=True)