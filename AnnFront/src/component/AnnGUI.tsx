import { DataSelector } from "./DataSelector";

export const AnnGUI = () => {
    return(
        <>
            <div className="columns" style={{minHeight:"103vh"}}>
                <div className="column is-3 has-background-black-ter pr-0" style={{"minWidth":"300px"}}>
                    <DataSelector/>
                </div>
                <div className="column">
                    <p>bbb</p>
                </div>
            </div>
        </>
    )
}