
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from 'pages/Home'
import Menu from 'components/Menu'
function RoutesApp() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>


    </BrowserRouter>
  );
}

export default RoutesApp;
