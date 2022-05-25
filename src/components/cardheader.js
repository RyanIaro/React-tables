export function CardHeader(props) {
    const { label } = props;
    return (
        <div class="card-header"> 
            { label } 
        </div>
    );
}