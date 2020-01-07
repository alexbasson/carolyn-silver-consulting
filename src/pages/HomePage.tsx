import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/HomePage.scss';

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="HomePage">
      <div className="banner">
        <h1>Strategies for Mission-Driven Nonprofit Organizations</h1>
      </div>

      <div className="content grid">
        <div className="grid-inner">
          <section className="col-4 col-8-tablet">
            <h2 className="title">Who we are</h2>
            <p><strong>Carolyn Silver Consulting</strong> provides consulting services to non-profit organizations
              seeking to improve their programmatic operations; enhance their impact; and take the next step toward
              operational excellence. With a particular focus on legal services and human services
              organizations, <strong>Carolyn Silver Consulting</strong> offers concrete solutions, insights and
              strategies designed to transform programs and organizational culture. Carolyn Silver is a creative,
              collaborative problem-solver who will join you as a thought partner, listen to your concerns and help
              you
              create a sustainable path toward organizational change.</p>
            <p><Link to="/about">Learn more</Link> about Carolyn’s background and experience.</p>
          </section>

          <section className="col-4 col-8-tablet">
            <h2 className="title">What we do</h2>
            <p><strong>Carolyn Silver Consulting</strong> provides a wide range of services to nonprofit
              organizations,
              with a particular focus on the challenges facing legal services and human services organizations.
              Services
              include: program design and implementation; strategic analysis; outcomes/evaluation frameworks; leading
              change management processes; grant-writing; group facilitation; employee coaching; and legal services.
            </p>
            <p><Link to="/services">Learn more</Link> about these services.</p>
          </section>

          <section className="col-4 col-8-tablet">
            <h2 className="title">Get in touch</h2>
            <p><Link to="/contact">Contact Carolyn</Link> today to learn more about service offerings and to take
              the first step toward organizational change.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
