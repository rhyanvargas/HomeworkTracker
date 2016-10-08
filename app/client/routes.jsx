import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

import BodyComponent from './components/BodyComponent';
import {MainLayout} from './MainLayout';

FlowRouter.route('/', {
  name: 'home',
  action: () => {
    mount(MainLayout, {
      content: <BodyComponent />
    });
  }
});