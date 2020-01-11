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
import {Footer} from './components/Footer';
import about from './assets/images/about.jpeg';
import services from './assets/images/services.jpeg';
import contact from './assets/images/contact.jpeg';

const App: React.FC = () => (
  <Router>
    <Header/>

    <Switch>
      <Route path="/about">
        <ContentPage title="about" image={about}>
          <AboutPage/>
        </ContentPage>
      </Route>
      <Route path="/contact">
        <ContentPage title="contact" image={contact}>
          <ContactPage/>
        </ContentPage>
      </Route>
      <Route path="/services">
        <ContentPage title="services" image={services}>
          <ServicesPage/>
        </ContentPage>
      </Route>
      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>

    <Footer/>
  </Router>
);

export default App;
