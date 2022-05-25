export function TEntry(props) {
    const { name , position , office , age , start_date , salary } = props;
    return(
        <tr>
            <td>{name}</td>
            <td>{position}</td>
            <td>{office}</td>
            <td>{age}</td>
            <td>{start_date}</td>
            <td>{salary}</td>
        </tr>
    );
}