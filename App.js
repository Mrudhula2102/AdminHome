
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Myprofile from "./components/Myprofile";
import Guestuser from "./components/Guestuser";
import Employeedetails from "./components/Employeedetails";
import Recruitment from "./components/Recruitment";
import Training from "./components/Training";


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/Myprofile' element={<Myprofile/>}></Route>
       <Route path='/Guestuser' element={<Guestuser/>}></Route>
       <Route path='/Employeedetails' element={<Employeedetails/>}></Route>
       <Route path='/Recruitment' element={<Recruitment/>}></Route>
       <Route path='/Training' element={<Training/>}></Route>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
