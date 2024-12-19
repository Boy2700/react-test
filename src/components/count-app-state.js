import React, { useState } from 'react';

function CounterAppState() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter App using useState</h1>
      <p>Count: {count}</p>
      <div>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterAppState;
