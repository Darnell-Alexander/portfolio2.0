import logo from './logo.svg';
import './App.css';
import Landing from './elements/Landing'
import { AnimatePresence } from 'framer-motion';
import Layout from './elements/Layout'
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </AnimatePresence>
    
  );
}

export default App;
