import { UserContext } from "../contexts";
import { useContext, useEffect, useRef, useState } from "react";
import { getDialogue } from "../api_wrapper"
import { Scenario } from "./Scenario";
import { Dialogue } from "./Dialogue"; 

export const AnnRoom = () => {
	const { user_id, room_name } = useContext(UserContext)
	// const navigation = useNavigate()
	const [patient, setPatient] = useState("")
	const ScenarioRef = useRef();

	const [log, setLog] = useState({});

	useEffect(() => {
		const getDialogue_async = async () => {
			if(room_name!==""){
				const log_res = await getDialogue(room_name)
				setLog(log_res)
				ScenarioRef.current.getScenario_async_ref(log_res.patient);
				setPatient(log_res.patient)
				console.log(log_res)
			}
		}
		getDialogue_async()
	}, [room_name])



	if(room_name===""){
		return(
			<div>
				<p>ログを選択しな</p>
			</div>
		)
	}
	return (
		<div className="columns">
			<div className="column is-6 has-background-dark" >
				<Scenario ref={ScenarioRef}/>
			
			</div>
			<div className="column has-background-dark px-0">
				<Dialogue dialogue={log.conversation}/>
			</div>
		</div>		
	)
}