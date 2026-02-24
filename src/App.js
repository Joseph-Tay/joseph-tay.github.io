// src/App.js
import React from 'react';
import Portfolio from './components/layout/Portfolio';

function App() {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <Portfolio />
    </div>
  );
}

export default App;