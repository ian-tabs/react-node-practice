import React, { useState } from 'react';

function App() {
  const [apiRoute, setApiRoute] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    fetch(`http://localhost:3001/api/${apiRoute}`)
      .then((res) => res.json())
      .then((data) => {
        setResponse(JSON.stringify(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div>
        <label htmlFor="apiRouteInput">API Route:</label>
        <input
          id="apiRouteInput"
          type="text"
          value={apiRoute}
          onChange={(e) => setApiRoute(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <p>Response:</p>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
