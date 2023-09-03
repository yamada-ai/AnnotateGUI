import { DataSelector } from "./DataSelector";
import { AnnRoom } from "./AnnRoom";

export const AnnGUI = () => {
    return(
        <>
            <div className="columns" style={{minHeight:"103vh"}}>
                <div className="column is-2 has-background-black-ter pr-0" style={{"minWidth":"200px"}}>
                    <DataSelector/>
                </div>
                <div className="column">
                    <AnnRoom />
                </div>
            </div>
        </>
    )
}