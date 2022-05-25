export function CardBody(props) {
    const { content,children }= props;
    return (
        <div class="card mb-4">
            <div class="card-body">{ content } { children }</div>
        </div>
    );
}