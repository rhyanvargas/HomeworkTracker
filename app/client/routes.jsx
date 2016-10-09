import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

import AssignmentViewComponent from './components/AssignmentViewComponent';
import DashboardViewComponent from './components/DashboardViewComponent';
import {MainLayout} from './MainLayout';

FlowRouter.route('/', {
  name: 'home',
  action: () => {
    mount(MainLayout, {
      content: <DashboardViewComponent />
    });
  }
});

FlowRouter.route('/assignment/:assignmentId', {
  name: 'assignment',
  action: (params) => {
    mount(MainLayout, {
      content: <AssignmentViewComponent assignmentId={params.assignmentId} />
    });
  }
});