import { UserContext } from "../contexts";
import { useContext, useEffect, useState } from "react";

type Props = {
    fname : string
};


export const DataTitle = (props:Props) => {
    const { user_id, room_name, selectRoom } = useContext(UserContext)
    const [fnameTitle, setFnameTitle] = useState(props.fname)
    // const navigation = useNavigate()

    const clickRoom = (room_name: string) => {
        selectRoom(room_name)
        console.log("pushed room_id:", room_name)
        // navigation("/chat/")
    }

    return(
        <button className="button is-dark my-2" style={{ width: "80%", maxWidth: "290px" }} onClick={() => clickRoom(props.fname)}>
            {props.fname}
        </button>
    )
}