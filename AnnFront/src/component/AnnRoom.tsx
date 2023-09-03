import { UserContext } from "../contexts";
import { useContext, useEffect, useState } from "react";
import { getDialogue } from "../api_wrapper"

export const AnnRoom = () => {
	const { user_id, room_name } = useContext(UserContext)
	// const navigation = useNavigate()

	const [log, setLog] = useState("");

	useEffect(() => {
		const getDialogue_async = async () => {
			if(room_name!==""){
				const log_res = await getDialogue(room_name)
				setLog(log_res)
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
		<div>
			<p>{room_name}</p>
		</div>		
	)
}