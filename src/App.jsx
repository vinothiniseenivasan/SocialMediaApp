
import './App.css';

import Button from '@mui/material/Button';
import CustomRoutes from './Components/Routes/CustomRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
 
  return (
    <Router>
      <Navbar />
     <CustomRoutes />
    </Router>
  )
}

export default App;
