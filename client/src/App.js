import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import { SignUp } from './Components/signUp';
import { SignIn } from './Components/signIn';
function App() {

  return (
  <div className='App'>
  <Navbar/>
  <Routes>
  <Route path="/NavBar" element={<Navbar/>} />
  <Route path="/home" element={<Home />} />
  <Route path="/user/SignUp" element={<SignUp />} />
  <Route path="/user/SignIn" element={<SignIn />} />
</Routes>
</div>
  );
}


export default App;
