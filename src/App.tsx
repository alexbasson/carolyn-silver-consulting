import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {AboutPage} from './pages/AboutPage'
import {ContactPage} from './pages/ContactPage'
import {HomePage} from './pages/HomePage'
import {Header} from './components/Header'
import {ServicesPage} from './pages/ServicesPage';

const App: React.FC = () => (
  <Router>
    <div>
      <Header/>

      <Switch>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/contact">
          <ContactPage/>
        </Route>
        <Route path="/services">
          <ServicesPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
