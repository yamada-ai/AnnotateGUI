import { UserContext } from "../contexts";
import React, {useEffect, useState, useContext } from "react";
import { getScenario } from "../api_wrapper"

type Props = {
	fname: string
};


export const Scenario = (props:Props) => {
	// const navigation = useNavigate()
	const { user_id, room_name} = useContext(UserContext)
	const [scenario, setScenario] = useState("");

	const [name, setName] = useState("")

	useEffect(() => {
		const getScenario_async = async () => {
			if (props.fname !== "") {
				const scenario_res = await getScenario(props.fname)
				setScenario(scenario_res)
				console.log("scenario", scenario_res)
				setName(scenario.name)
			}
		}
		getScenario_async()
	}, [room_name])

	return (
		<div className="has-text-white">
			<p>{props.fname}</p>
			<p>{name}</p>
		</div>
	)
}