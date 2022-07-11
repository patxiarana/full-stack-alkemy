import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'


function App() {

  return (
  <div className='App'>
    <Navbar/>
  <Routes>
  <Route path="/home" element={<Home />} />
</Routes>
</div>
  );
}

export default App;
