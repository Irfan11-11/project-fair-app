import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Footer from './componets/Footer';
import { useContext } from 'react';
import { tokenAuthContext } from './context/TokenAuth';


function App() {
  const { isAtherised, setIsAutherised } = useContext(tokenAuthContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/dashboard' element={isAtherised ? <Dashboard /> : <Navigate to={'/login'} />} />
        <Route path='/projects' element={isAtherised ? <Projects /> : <Navigate to={'/login'} />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
