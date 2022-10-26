import Navbar from './NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Forms/LoginForm';
import {Routes,Route} from 'react-router-dom';
import SignUp from './Forms/Sign_Up';
import NavBar from './Main/NavBar';


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element = {<LoginForm/>}/> 
        <Route path='/Sign_Up' element={<SignUp/>}/>
        <Route path='/home' element={<NavBar/>}/>
      </Routes>
    </div>
  );
}

export default App;
