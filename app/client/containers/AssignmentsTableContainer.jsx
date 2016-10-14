import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import AssignmentsTableComponent from '../components/AssignmentsTableComponent';

export default AssignmentsTableContainer = createContainer(({assignmentId}) => {
  if (! assignmentId) {
    return;
  }

  // much of the code below is inaccurate because data structures have yet to be established yet
  // but parameters being passed around are understood data points to eventually be made, such as assignmentId
  const handle = Meteor.subscribe('', assignmentId);
  let assignments = [];

  if (handle.ready()) {
    userCourses = UserAssignments.find(assignmentId).fetch();
    students = userCourses.map(userCourse =>
      Users.findOne({_id: userCourse.userId, roles: 'student'})
    );
  };
  
  return {assignments};

}, AssignmentsTableComponent );   
