import { BrowserRouter as Router } from 'react-router-dom';

import Routings from '@/router/Routings';
import { ThemeProvider } from './components/theme-provider';
import { AuthProvider } from './context/AuthProvider';

const App = () => (
  <Router>
    <ThemeProvider>
      <AuthProvider>
        <Routings />
      </AuthProvider>
    </ThemeProvider>
  </Router>
);

export default App;
