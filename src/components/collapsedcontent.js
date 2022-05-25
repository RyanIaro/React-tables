export function CollapsedContent(props){
    const { id , children } = props;
    return(
        <div class="collapse" id={ id }>
            <nav class="sb-sidenav-menu-nested nav">
                { children }
            </nav>
        </div>
    );
}