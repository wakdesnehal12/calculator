import './App.css';
// import Calculator from './Components/Calculator';
import Calci from './Class_Component/Calci';
import CompB from './Context/CompB';
import First from './Reconciliation/First';
import CompA from './Context/CompA';
import Test from './Test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewTest from './NewTest';

function App() {
  return (
    <div className="App">
      {/* <Calculator/> */}
      {/* <Calci/> */}
      {/* <First/> */}
      {/* <CompA/> */}
      {/* <Test/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test/>}/>
          <Route path='/newtest' element={<NewTest/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Message/> */}
      {/* <Msg/> */}
    </div>
  );
}

export default App;
