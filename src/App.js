import React from 'react';
import {RecoilRoot} from 'recoil';
import Header from './components/Header';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <Task />
      </div>
    </RecoilRoot>
  );
}

export default App;
