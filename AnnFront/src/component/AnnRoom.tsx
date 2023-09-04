import { UserContext } from "../contexts";
import { useContext, useEffect, useState } from "react";
import { getDialogue } from "../api_wrapper"
import { Scenario } from "./Scenario";

export const AnnRoom = () => {
	const { user_id, room_name } = useContext(UserContext)
	// const navigation = useNavigate()
	const [patient, setPatient] = useState("")

	const [log, setLog] = useState("");

	useEffect(() => {
		const getDialogue_async = async () => {
			if(room_name!==""){
				const log_res = await getDialogue(room_name)
				setLog(log_res)
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
			<div className="column is-3 has-background-dark">
				<Scenario fname={patient}/>
			</div>
			<div className="column">

			</div>
		</div>		
	)
}