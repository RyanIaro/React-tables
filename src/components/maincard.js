export function MainCard(props) {
    const { children } = props;
    return(
        <div class="card mb-4">
            { children }
        </div>
    );
}