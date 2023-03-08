import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
// import Login from './Components/Login/Login';
// import Dashboard from './Components/Dashboard';
// import ProtectedRoute from './Components/ProtectedRoute';
// import PageNotFound from './Components/PageNotFound';
const Login = React.lazy(() => import('./Components/Login/Login'))
const Dashboard = React.lazy(() => import('./Components/Dashboard'))
const ProtectedRoute = React.lazy(() => import('./Components/ProtectedRoute'))
const PageNotFound = React.lazy(() => import('./Components/PageNotFound'))
function App() {
  return (
    <div>
      <Routes>

        <Route
          path='/login'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>}
        />
        <Route 
        path='/dashboard' 
        element={
        <Suspense fallback="Loading">
        <ProtectedRoute Component={Dashboard}/>
        </Suspense>}
        />
         
        <Route path='/' element={<Register />} />
        <Route
          path='*'
          element={
            <Suspense fallback="Loading....">
              <PageNotFound />
            </Suspense>}
        />
      </Routes>
    </div>
  );
}

export default App;
