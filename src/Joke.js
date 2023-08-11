import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        //using && below, if props.setup is provided, the h3 element is rendered. if isShown is true, the p element is rendered
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}