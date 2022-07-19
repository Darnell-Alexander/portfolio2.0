import logo from './logo.svg';
import './App.css';
import Landing from './elements/Landing'
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <AnimatePresence>
      <Landing />
    </AnimatePresence>
    
  );
}

export default App;
