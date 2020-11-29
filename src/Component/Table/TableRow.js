import React from 'react'
import './TableRow.css'
import subTaskIcon from '../../assets/icon/subtask_icon.PNG'
import Avatar from '@material-ui/core/Avatar';


function TableRow({ data, lobcolor }) {
    console.log(data)
    return (

        <tr className="tableRow">
            <td style={{ width: 55 }}></td>
            <td><input type="checkbox" /></td>
            <td className="taskNameTD">{data.taskName}</td>
            <td className="lobTD"><p style={{ background: data.lobcolor }}>{data.lob.toUpperCase()}</p></td>

            <td className="subTask">{data.subtask ? <> <img src={subTaskIcon} alt="" />{data.subtask}</> : ""}</td>
            <td><select className="selectDropdown" ><option>Unassigned</option></select></td>
            <td className="step">{data.step}</td>
            <td className="dateTime"><p ><span style={{ background: data.duecolor, width: data.duewidth }}></span>
                {data.dueDate ? <span>{data.dueDate} @{data.dueTime}</span> : <span>No due date</span>}
            </p></td>
        </tr>






    )
}

export default TableRow


