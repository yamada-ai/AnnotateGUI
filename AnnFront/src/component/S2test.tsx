import { UserContext } from "../contexts";
import React, { useEffect, useState, useContext } from "react";
import { getScenario } from "../api_wrapper"


export const Scenario = (props, ref) => {
	// const navigation = useNavigate()
	const { user_id, room_name } = useContext(UserContext)
	const [scenario, setScenario] = useState("");

	React.useImperativeHandle(props.customRef, () => ({
		log: () => {
			console.log('called log');
		},
	}));

	return (
		<div>
		</div>
	)
}