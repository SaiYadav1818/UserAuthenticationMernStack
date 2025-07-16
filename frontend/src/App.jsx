import Home from './components/home';
import Register from './components/register';
import Layout from './components/layout';
import { Routes, Route,Link } from 'react-router-dom';
import Login from './components/login';
import Loginsucess from './components/loginSucessful';

function App() {
  return (
    
    <div>
     
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='home/login' element={<Login/>} />
          <Route path='home/register' element={<Register />} />
          <Route path='home/sucess' element={<Loginsucess/>} />
        </Route>
        <Route path='*' element={<h1>404 error page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
