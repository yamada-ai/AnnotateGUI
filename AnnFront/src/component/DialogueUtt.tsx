type Props = {
    speaker: string,
    utt: string,
}


export const DialogueUtt = (props: Props) => {

    console.log(props)

    // system
    if (props.speaker === "usr") {
        return (
            <div>
                <div className="my-1 is-flex is-flex-direction-row-reverse">
                    {/* 発話を表示 */}
                    <div className="is-flex is-flex-direction-row-reverse" style={{ width: "80%" }}>
                        <div className="is-size-3 mx-3">
                            <i className={"fas fa-user-md"} ></i>
                        </div>
                        <div className={" py-2 px-3 is-size-6 is-family-sans-serif has-background-link has-text-white is-flex"} style={{ borderRadius: "14px", maxWidth: "100%", wordBreak: "break-word", wordWrap: "break-word", whiteSpace: "pre-wrap", alignItems: "center" }}>
                            {props.utt}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="mb-2">
                <div className="my-2 is-flex is-flex-direction-row">
                    {/* 発話を表示 */}
                    <div className="is-flex is-flex-direction-row" style={{ width: "80%" }}>
                        <div className="is-size-3 mx-3">
                            <i className={"fas fa-user"} ></i>
                        </div>
                        <div className={" py-2 px-3 is-size-6 is-family-sans-serif has-background-grey-darker has-text-white is-flex"} style={{ borderRadius: "14px", maxWidth: "100%", wordBreak: "break-word", wordWrap: "break-word", whiteSpace: "pre-wrap", alignItems: "center" }}>
                            {props.utt}
                        </div>
                    </div>
                </div>
                <div className="columns is-centered my-2">
                    <div className="column is-10 has-background-grey-dark">
                        {/* o, t, x */}
                        <div className="level m-0">
                            <div className="letel-left">
                            <p className="has-text-white">
                                破綻ラベルの付与
                            </p>
                            </div>
                            <div className="level-item">
                                <button className="button" style={{width:"35px", height:"35px"}}>
                                    〇
                                </button>
                                <button className="button mx-5" style={{width:"35px", height:"35px"}}>
                                    △
                                </button>
                                <button className="button" style={{width:"35px", height:"35px"}}>
                                    ✕
                                </button>
                            </div>
                        </div>
                        {/* コメント記入欄 */}
                        <div className="mt-2">
                            <p className="has-text-white">
                                コメント記入欄
                            </p>
                            <div className="level m-0">
                                <div className="level-item">
                                    <textarea className="inputarea my-2" rows={1} style={{fontSize: "14px", width:"80%"}}>

                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }

}