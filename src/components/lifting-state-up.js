import React, { useState } from 'react';

function LiftingStateUp() {
  const [message, setMessage] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <ChildA message={message} setMessage={setMessage} />
      <ChildB message={message} />
    </div>
  );
}

function ChildA({ message, setMessage }) {
  return (
    <input
      type="text"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '10px',
        width: '50%',
      }}
    />
  );
}

function ChildB({ message }) {
  return (
    <div>

    <h1>Lifting State Up</h1>
    <p style={{ color: '#555', fontSize: '16px' }}>
      {message}
    </p>
    </div>
  );
}

export default LiftingStateUp;
