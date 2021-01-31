import React from "react";
import { Container} from "react-bootstrap";
import NavbarComponent from '../NavbarComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import Excercises from '../Excercises';
import Footer from '../Footer';
import PracticeList from "../PracticeList";
import Practice from "../Practice";
import StoryTutorial from '../StoryTutorial';
import MindBulletsTutorial from '../MindBulletsTutorial'

export default function UserDashboard() {
  return (
    <>
    <Router>
      <NavbarComponent />
      <Container>
        <Switch>
           <Route path="/" exact component={WelcomePage} />
           <Route path="/ex" exact component={Excercises} />
           <Route path="/stories" exact component={PracticeList} />
           <Route path="/practice/:id" exact component={Practice} />
           <Route path="/story-tutorial" exact component={StoryTutorial} />
           <Route path="/mb-tutorial" exact component={MindBulletsTutorial} />
        </Switch>
      </Container>
    </Router>
    <Footer />
    </>
  );
}
