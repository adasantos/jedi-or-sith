import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { default as Router} from './routes';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
