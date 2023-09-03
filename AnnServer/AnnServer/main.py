from AnnServer.api.read.get_dialogues_fname import handler as get_dialogues_fname_handler
from AnnServer.api.read.get_dialogue import handler as get_dialogue_handler
from AnnServer.api.read.get_scenario import handler as get_scenario_handler


from fastapi import FastAPI, UploadFile
from fastapi import Response
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

@app.get("/hello")
def hello():
    return {"message": "Hello World"}

@app.get("/api/dialogues")
def get_dialogues_fname():
    return get_dialogues_fname_handler()

@app.get("/api/dialogue/{fname}")
def get_dialogue(fname):
    return get_dialogue_handler(fname)

@app.get("/api/scenario/{fname}")
def get_scenario(fname):
    return get_scenario_handler(fname)