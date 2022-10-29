import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Forms/LoginForm';
import {Routes,Route} from 'react-router-dom';
import SignUp from './Forms/Sign_Up';
import NavBar from './Main/Nav/NavBarMain';
import AboutMe from './Main/aboutMe/AboutMe';



function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element = {<LoginForm/>}/> 
        <Route exact path='/Sign_Up' element={<SignUp/>}/>
        <Route exact path='/user-home' element={<NavBar/>}/>
        <Route exact path='/user-home-aboutMe' element={<AboutMe/>}/>
      </Routes>
    </div>
  );
}

export default App;
