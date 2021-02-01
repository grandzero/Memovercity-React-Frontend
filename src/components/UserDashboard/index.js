import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/WelcomePage';
import Excercises from './components/Excercises';
import PracticeList from "./components/PracticeList";
import Practice from "./components/Practice";
import StoryTutorial from './components/StoryTutorial';
import MindBulletsTutorial from './components/MindBulletsTutorial';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './components/HomePage';
import React from "react";
import { Container} from "react-bootstrap";
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import {MainProvider} from './contexts/MainContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
function UserDashboard() {
  return (<>

<MainProvider>
<NavbarComponent />
<Container>
  <Switch>
    
    
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} /> 
     <Route path="/user" exact component={WelcomePage} />
     <Route path="/ex" exact component={Excercises} />
     <Route path="/ex/:practiceName" exact component={PracticeList} />
     <Route path="/practice/:id" exact component={Practice} />
     <Route path="/story-tutorial" exact component={StoryTutorial} />
     <Route path="/mb-tutorial" exact component={MindBulletsTutorial} />
     
  </Switch>
</Container>  
</MainProvider>

</>
  );
}

export default UserDashboard;
