import { useContext, useEffect, useState } from "react";

import { getDialoguesFilename } from "../api_wrapper"
import { DataTitle } from "./DataTitle"

export const DataSelector = () => {

    const list = [];
    const [filenames, setFilenames] = useState([]);

    useEffect( () => {
        const getDialoguesFilename_async = async () =>{
            const filenames_res = await getDialoguesFilename()
            setFilenames(filenames_res.dialogues)
        }
        getDialoguesFilename_async()
    }, [])

    for (const fname of filenames) {
        list.push(

            <div className="level my-2" style={{width:"100%%"}}>
                <div className="level-item" style={{width:"100%%"}}>
                    <DataTitle fname={fname}/>
                </div>
            </div>
            
        );
    }

    return(
        <>
       <div className="has-background-primary py-2 has-text-centered">
            <p className="has-text-white is-size-4 py-2">
                ログを選択
            </p>
        </div>
        <div className="columns is-centered">
            <div className="column is-11">
                    {list}
            </div>
        </div>
        </>
    )
}