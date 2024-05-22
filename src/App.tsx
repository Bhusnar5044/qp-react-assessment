import { BrowserRouter as Router } from 'react-router-dom';

import Routings from '@/router/Routings';
import { ThemeProvider } from './components/theme-provider';

const App = () => (
  <Router>
    <ThemeProvider>
      <Routings />
    </ThemeProvider>
  </Router>
);

export default App;
