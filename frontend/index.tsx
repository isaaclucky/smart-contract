// import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './src/Router';
// import Router from './pages/Router';
// import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>

      <div>
        <Router/>
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);

