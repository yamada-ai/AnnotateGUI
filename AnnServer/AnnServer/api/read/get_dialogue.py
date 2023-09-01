from AnnServer.api.core.response import convert_for_response, bad_response

import os
import json

dialogue_path = "/dialogues/"

def handler(fname):
    try:
        with open(dialogue_path+'{0}.json'.format(fname)) as f:
            res = json.load(f)
        return convert_for_response(res)    
    except Exception as e:
        print(bad_response(e))
        return bad_response(e)