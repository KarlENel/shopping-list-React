import React from 'react';
import './App.css';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      {/* Render the ShoppingList component */}
      <ShoppingList />
    </div>
  );
}

export default App;
