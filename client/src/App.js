import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Formoperation from './Components/Formoperation';

function App() {

  return (
  <div className='App'>
    <Navbar/>
  <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/formOp" element={<Formoperation/>} />
</Routes>
</div>
  );
}


export default App;
