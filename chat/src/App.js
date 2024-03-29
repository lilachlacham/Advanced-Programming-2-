import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ChattingPage from './ChattingPage/ChattingPage';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login/ >}></Route>
          <Route path = '/Login' element={<Login/ >}></Route>
          <Route path = '/Register' element={<Register/ >}></Route>
          <Route path = '/ChattingPage' element={<ChattingPage/ >}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
