import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
