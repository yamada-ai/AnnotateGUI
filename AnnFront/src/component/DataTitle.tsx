type Props = {
    fname : string
};


export const DataTitle = (props:Props) => {

    return(
        <button className="button is-dark my-2" style={{width:"80%", maxWidth:"290px"}}>
            {props.fname}
        </button>
    )
}