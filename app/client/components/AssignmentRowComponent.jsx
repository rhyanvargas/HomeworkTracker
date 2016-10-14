import React from 'react';

const AssignmentRowComponent = ({dueDate, completionStatus, task, createdAt}) => {
  return (
    // Teddy: if you do decide to rename any of the names for data located in AssignmentTableComponent,
    // make sure they match with the data names located here
    <tr>
      <td className='dueDate'>{dueDate}</td>
      <td className='courses'>{completionStatus}</td>
      <td className='emails'>{task}</td>
      <td className='createdAt'>{createdAt}</td>
    </tr>
  )
}

export default AssignmentRowComponent;