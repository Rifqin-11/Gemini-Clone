import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <>
      <Sidebar chatHistory={chatHistory} />
      <Main chatHistory={chatHistory} setChatHistory={setChatHistory} />
    </>
  );
};

export default App;