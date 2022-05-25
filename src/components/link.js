export function Link(props) {
    const { target , href , label , children} = props;
    return(
        <a target={ target } href={ href }>
            { label }
            { children }
        </a>
    );
}