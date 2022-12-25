import './App.css';
import { Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import Account from './Pages/Account';

function App() {
  return (

    <Routes>
      <Route index element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/account' element={<Account />} />
    </Routes>  

  );
}

export default App;
