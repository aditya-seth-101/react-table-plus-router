
import './App.css';
import Tabel from './Tabel';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RowEditor from './RowEditor';
import RowDeleter from './RowDeleter';
import Demo from './Demo'
import TableHome from './TableHome';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tabel/>}/>
          <Route path='/Table' element={<TableHome/>}/>
          <Route  path='/RowEditor'  element={<RowEditor/>}/>
          <Route  path='/RowDeleter'  element={<RowDeleter/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Demo /> */}
    </div>
  );
}

export default App;
