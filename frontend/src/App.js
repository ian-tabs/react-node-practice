import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import all files in the pages directory
const pages = require.context('./pages', true, /\.jsx?$/);

// Get a list of all page components
const pageComponents = pages.keys().map((key) => pages(key).default);


// console.log(pages.keys());
// console.log(pageComponents);

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          {pageComponents.map((PageComponent, index) => (
            <li key={index}>
              <Link to={`/${PageComponent.name}`}>
                {PageComponent.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        {/* Set Home Page here */}
        <Route path="/" element={<h1>Welcome to my app!</h1>} />

        {pageComponents.map((PageComponent, index) => (
          <Route
            key={index}
            path={`/${PageComponent.name}`}
            element={<PageComponent />}
          />
        ))}

      </Routes>
    </>

  );

}

export default App;
