import React from 'react';
import Colgroup from 'react-colgroup';

import AssignmentRowComponent from '../AssignmentsRowComponent';
import ViewAssignmentButtonComponent from '../components/ViewAssignmentButtonComponent';

const AssignmentsTableComponent = () => {
  return (
    <div>
    <p id='default-search'>DEFAULT: assignments are rendered by most recent CREATED date</p>
    <table>
      <Colgroup cols={[150, 250, 250, 150, 250, 150]} />
        <tbody>
          <tr>
            <th>
              DUE DATE
            </th>
            
            <th>
              COMPLETION STATUS
            </th>
            <th>
              TASK
            </th>
            <th>
              VIEW ASSIGNMENT 
              <ViewAssignmnetButtonComponent />
            </th>
            <th>
              CREATED DATE
            </th>
          </tr>
          {assignments.map(assignment =>
            // Teddy: rename the data names below as you see fit 
            <AssignmentRowComponent 
              key={assignment._id} 
              dueDate={assignment.dueDate} 
              completionStatus={assignment.completionStatus} 
              task={assignment.task} 
              createdAt={assignment.createdAt.toLocaleString()} 
            /> 
          )} 
        </tbody>
      </table>
    </div>
  )
}

export default AssignmentsTableComponent;