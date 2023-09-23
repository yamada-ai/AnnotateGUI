import { DialogueUtt } from "./DialogueUtt"

type Props = {
    dialogue: {
        speaker:string,
        utt:string,
        wav_name:string,
        turn:string
    }[]
}


export const Dialogue = (dialogue:Props) => {

    const list = []
    console.log(dialogue.dialogue)

    for(const d in dialogue.dialogue){
        const utt = dialogue.dialogue[d]
        list.push(<DialogueUtt speaker={utt.speaker} utt={utt.utt}/>)
    }

    return(
        <div>
            {/* {list} */}
            <p className="has-text-white mt-3 is-size-5 ml-2">対話履歴</p>
			<div className="columns is-centered mt-3" >
				<div className="column is-11 p-2 has-background-success-light" style={{ borderRadius: "10px", maxHeight:"90vh", overflowY: "auto", overflowX: "hidden"}}>
					{list}
				</div>
			</div>
			<div className="" style={{height:"1vh"}}></div>
        </div>
    )
}