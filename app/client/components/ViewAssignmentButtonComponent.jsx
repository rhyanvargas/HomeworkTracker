import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

const ViewAssignmentButtonComponent = ({assignmentId}) => {
  let pathDef = '/assignment/:assignmentId';
  let params = {assignmentId};
  const path = FlowRouter.path(pathDef, params); 

  return (
    <div>
      <button className='view-assignment-button' type='button'>
        <a href={path}>
          VIEW ASSIGNMENT 
        </a>
      </button>
    </div>
  )
};

export default ViewAssignmentButtonComponent; 