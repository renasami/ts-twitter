from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import gensim
import gensim.models
from gensim.models import KeyedVectors
from get_tweets import get_tweets
from wakati import wakati


app = FastAPI()
origins = [
    "http://localhost:3000"
]

# print("watit to load models")
# model = gensim.models.KeyedVectors.load_word2vec_format('machine_learn/ja.vec')
# print("finish load models !!")

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
    wakati(tweetsList)
    return tweetsList


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000, reload=True)