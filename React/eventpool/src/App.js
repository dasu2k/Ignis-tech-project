import './App.css';
import Navbar from './components/Navbar'
import GlobalEvent from './components/GlobalEvents';
import { Route,Routes } from 'react-router-dom';
import CreateEvent from './components/AddEvent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/globalEvents' element={<GlobalEvent/>}></Route>
        <Route path='/createEvent' element={<CreateEvent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
