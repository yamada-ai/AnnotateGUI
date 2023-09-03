from AnnServer.api.core.response import convert_for_response, bad_response

import os
import json

scenario_path = "/scenarios/"

scenario_item_dict = {
    "氏名": "name",
    "性別": "sex",
    "年齢": "age",
    "場面設定": "setting",
    "主訴": "chief_complaint",
    "現病歴": "illness_history",
    "受療行動": "treatment_action",
    "解釈モデル": "interpretation_model",
    "既往歴": "past_history",
    "家族歴": "family_history",
    "患者背景": "patient_background",
    "演技の指針": "acting_guidelines",
}


def convert_scenario(sfile_list:list)->dict:
	scenario = dict()
	for sline in sfile_list:
		item_split = sline.split(":")
		print("not	", sline, item_split)
		item = item_split[0].strip()
		content = item_split[1].strip()
		print(sline, item_split)
		if item in scenario_item_dict:
			scenario[scenario_item_dict[item]] = content
	return scenario

def handler(fname):
	try:
		if fname in os.listdir(scenario_path):
			with open(scenario_path+'{0}'.format(fname), mode="r", encoding = "utf-8-sig") as f:
				sfile_list = f.readlines()
			return convert_for_response(convert_scenario(sfile_list))
		else:
			return convert_for_response({}) 
	except Exception as e:
		print(bad_response(e))
		return bad_response(e)