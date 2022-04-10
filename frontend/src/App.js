import './App.css';
import Homepage from "./components/home/home"
import Login from "./components/login/login"
import CourseList from "./components/courseList/courseList"
import UserList from "./components/userList/UserList";
import Register from "./components/register/Register"
import {
  BrowserRouter as Router, 
  Routes, 
  Route
  
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user,setLoginUser] = useState({
 
  })
  return (
    <div className="App">
      <Router>
        {/* <Register/> */}
<Routes>
  {/* <Route exact path="/">
    {
      user && user._id ? <Homepage/>:<Login/>
    }<Homepage/></Route>4 */}
  {/* <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route> */}
  <Route path='/'element={<Homepage/>}></Route>
  <Route path="/Register" element={<Register/>}></Route>
  <Route path='/Userlist' element={<UserList/>}></Route>
  <Route path='/courseList' element={<CourseList/>}></Route>
</Routes>

      </Router>
   
    </div>
  );
}

export default App;