from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import gensim
import gensim.models
from gensim.models import KeyedVectors


app = FastAPI()
origins = [
    "http://localhost:3000"
]

print("watit to load models")
model = gensim.models.KeyedVectors.load_word2vec_format('machine_learn/ja.vec')
print("finish load models !!")

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
    print(user_id)
    return {"user_id":user_id[1:] + " is your user id"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000)