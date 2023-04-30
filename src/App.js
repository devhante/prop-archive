import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App background">
      <Header />
    </div>
  );
}

export default App;
