import { UserContext } from "../contexts";
import React, { useEffect, useState, useContext, forwardRef, useRef } from "react";
import { getScenario } from "../api_wrapper"
import { ScenarioItem } from "./ScenarioItem";


export const Scenario = forwardRef((props, ref) => {
	// const navigation = useNavigate()
	// const { user_id, room_name } = useContext(UserContext)
	const [scenario, setScenario] = useState("");
	const [name, setName] = useState("")
	const sRef = useRef();
	const itemList = []

	const ScenarioItemDict: { [key: string]: string } = {
		name: "氏名",
		sex: "性別",
		age: "年齢",
		setting: "場面設定",
		chief_complaint: "主訴",
		illness_history: "現病歴",
		treatment_action: "受療行動",
		interpretation_model: "解釈モデル",
		past_history: "既往歴",
		family_history: "家族歴",
		patient_background: "患者背景",
		acting_guidelines: "演技の指針",
	  };

	React.useImperativeHandle(ref, () => ({
		getScenario_async_ref(fname:string){
			getScenario_async(fname);
		}
	}));

	const getScenario_async = async (fname:string) => {
		if (fname !== "") {
			const scenario_res = await getScenario(fname)
			setScenario(scenario_res)
			// console.log("親から呼べてる？", scenario_res);
			setName(scenario_res.name)
			
		}else{
			console.log("Scenario.tsx: props.fname was None")
		}
	}
	for (const key in ScenarioItemDict) {
		// console.log(ScenarioItemDict[key], scenario[key])
		itemList.push(<ScenarioItem item={ScenarioItemDict[key]} content={scenario[key]} />)
	}

	return (
		<div >
			<p className="has-text-white mt-3 is-size-5 ml-2">患者情報</p>
			<div className="columns is-centered mt-3" >
				<div className="column is-11 p-2 has-background-success-light" style={{ borderRadius: "10px", maxHeight:"90vh", overflowY: "auto", overflowX: "hidden"}}>
					{itemList}
				</div>
			</div>
			<div className="" style={{height:"1vh"}}></div>
		</div>
	)
})
