import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="HomePage">
      <div className="banner">
        <h1>So much consulting</h1>
      </div>
      <div className="content">
        <section>
          <div className="left">
            <h2>Who we are</h2>
          </div>
          <div className="right">
            <p><strong>Carolyn Silver Consulting</strong> provides consulting services to non-profit organizations who
              are
              seeking to
              improve their programmatic operations and efficiency; enhance their impact; and take the next step toward
              operational excellence. With a particular focus on legal services and human services organizations,
              Carolyn
              Silver Consulting offers concrete solutions, insights and strategies designed to transform programs and
              organizational culture. Carolyn Silver is a creative, collaborative problem-solver who will join you as a
              thought partner, genuinely listening to your concerns and creating a sustainable path forward toward
              organizational change.</p>
            <p><Link to="/about">Learn more</Link> about Carolyn’s background and experience.</p>
          </div>
        </section>

        <hr/>

        <section>
          <div className="left">
            <h2>What we do</h2>
          </div>
          <div className="right">
            <p><strong>Carolyn Silver Consulting</strong> provides a wide range of services to nonprofit
              organizations, with a particular focus on the challenges facing legal services and human services
              organizations.
              Carolyn’s services include: program design and implementation; strategic analysis; design of
              outcomes/evaluation frameworks; leading change management processes; grant-writing; meeting/group
              facilitation; employee coaching; and legal services.</p>
            <p><Link to="/services">Learn more</Link> about each of these services.</p>
          </div>
        </section>

        <hr/>

        <section>
          <div className="left">
            <h2>Get in touch</h2>
          </div>
          <div className="right">
            <p><Link to="/contact">Contact Carolyn</Link> today to learn more about Carolyn's services and to take the
              first
              step toward organizational change.</p>
          </div>
        </section>

      </div>
    </div>
  );
};
