import { useEffect, useState } from "react";
import { getScenario } from "../api_wrapper"

type Props = {
	fname: string
};


export const Scenario = (props:Props) => {
	// const navigation = useNavigate()

	const [scenario, setScenario] = useState("");

	useEffect(() => {
		const getScenario_async = async () => {
			if (props.fname !== "") {
				const scenario_res = await getScenario(props.fname)
				setScenario(scenario_res)
				console.log(scenario_res)
			}
		}
		getScenario_async()
	}, [room_name])

	if (room_name === "") {
		return (
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