
import './App.css';
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Appoinment from './Pages/Appoinment';
import LabTest from './Pages/LabTest';
import MedicineOrder from './Pages/MedicineOrder';
import Message from './Pages/Message';
import Payment from './Pages/Payment';
import Settings from './Pages/Settings';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Sidebar>     
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Appoinment" element={<Appoinment />} />
          <Route path="/LabTest" element={<LabTest />} />
          <Route path="/MedicineOrder" element={<MedicineOrder />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
         
      

      </Sidebar>     
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
