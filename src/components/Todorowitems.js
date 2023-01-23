
function TodoRowItems(props){

    const rowNumber = 4;
    const rowStatus = 'done';
    const rowDescription = 'Go for running';

    return(
       
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowStatus}</td>
        </tr>
       
 
    ) 
}


export default TodoRowItems;