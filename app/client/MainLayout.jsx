import React from 'react';

export const MainLayout = ({content}) => (
  <div className='main-layout'>
    <header>
      <h1>
        HomeworkTracker | powered by Meteor & React
      </h1>
    </header>

    {content}

    <footer>
      <small>
        <a href='http://madewithloveinbaltimore.org' id='made-love'>Made with <span className='red'>&hearts;</span> in Baltimore</a>
      </small>
    </footer>
  </div>
)