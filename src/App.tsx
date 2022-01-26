import { BrowserRouter } from 'react-router-dom';

import { default as Router} from './routes';
import  GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
