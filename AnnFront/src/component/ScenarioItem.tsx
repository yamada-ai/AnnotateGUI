

type Props = {
    item: string,
    content: string
}

export const ScenarioItem = (props: Props) => {

    return (
        <div className="columns my-3 px-2">
            <div className="column is-3 py-0 px-1">
                <div className="p-1 has-background-success has-text-white has-text-centered" style={{ width: "100%" }}>
                    {props.item}
                </div>
            </div>
            <div className="column py-0 px-1">
                <div className="p-1 ml-2">
                    {props.content}
                </div>
            </div>
        </div>
    )
}