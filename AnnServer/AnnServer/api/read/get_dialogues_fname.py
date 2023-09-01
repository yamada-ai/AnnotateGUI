from AnnServer.api.core.response import convert_for_response, bad_response

import os

dialogue_path = "/dialogues/"

def format_filename(fname_raw:str):
    return fname_raw.split(".json")[0]

def handler():
    try:
        res = {
            "dialogues" : [ format_filename(fname_raw) for fname_raw in os.listdir(dialogue_path)]
        }
        return convert_for_response(res)    
    except Exception as e:
        print(bad_response(e))
        return bad_response(e)