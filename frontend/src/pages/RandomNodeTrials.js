import React, { useState } from 'react';

function RandomNodeTrials() {

    const [apiRoute, setApiRoute] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = () => {
        fetch(`http://localhost:3001/api/${apiRoute}`)

            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setResponse(JSON.stringify(data));
            })
            .catch((err) => {
                if (err.response && err.response.status === 404) {
                    console.error('Server not found');
                } else if (err.response && err.response.status === 500) {
                    console.error('Internal server error');
                } else {
                    console.error('Something went wrong');
                }
            });
    };

    return (
        <>
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
        </>
    );
}

export default RandomNodeTrials;
