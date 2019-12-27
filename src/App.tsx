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
import {ContentPage} from './components/ContentPage';

const App: React.FC = () => (
  <Router>
    <div>
      <Header/>

      <Switch>
        <Route path="/about">
          <ContentPage title="about">
            <AboutPage/>
          </ContentPage>
        </Route>
        <Route path="/contact">
          <ContentPage title="contact">
            <ContactPage/>
          </ContentPage>
        </Route>
        <Route path="/services">
          <ContentPage title="services">
            <ServicesPage/>
          </ContentPage>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
