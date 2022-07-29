
import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './Componants/Dashboard';
import Solutions from './Componants/Solutions';
import About from './Componants/about';
import Daterange from './Componants/Daterange';

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route path='/' element={ <Dashboard/>}/>
              <Route path='/solution' element={ <Solutions/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/daterange' element={<Daterange/>}/>
            </Routes>
      </Router>
    
    </>
  );
}

export default App;
