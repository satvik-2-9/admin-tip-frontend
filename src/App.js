import React from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import AdminTip from './components/AdminTip';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-tip" element={<AdminTip />} ></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
