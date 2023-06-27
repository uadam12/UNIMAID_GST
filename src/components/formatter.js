import reactStringReplace from "react-string-replace";

export const Text = props => {

    return <h3>{
        reactStringReplace(
            reactStringReplace(
                props.content,
                /_/gi,
                (match, i) => <u>{match}</u>
            ),
            /\*/gi,
            (match, i) => <b>{match}</b>
        )
    }</h3>;
}