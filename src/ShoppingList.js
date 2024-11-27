import React, { useState } from 'react';

function ShoppingList() {
  // State to store the list of items
  const [items, setItems] = useState([]);
  // State to handle the input field
  const [input, setInput] = useState('');

  // Function to add an item to the list
  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput(''); // Clear input after adding
    }
  };

  // Function to remove an item from the list
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Your Shopping List</h2>
      {/* Input and Add Button */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add an item"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={addItem} style={{ padding: '10px' }}>
        Add
      </button>

      {/* Display the List */}
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}{' '}
            <button
              onClick={() => removeItem(index)}
              style={{
                marginLeft: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
