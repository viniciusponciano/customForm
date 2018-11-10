import React from 'react';
import SearchAppBar from './SearchAppBar';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

const App = () => (
  <div>
    <SearchAppBar title="Custom Form" />
    <div className="appContent">
      <Hello />
      <Info />
    </div>
  </div>
);

export default App;
