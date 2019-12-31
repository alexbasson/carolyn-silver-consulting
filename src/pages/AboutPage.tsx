import React from 'react';
import about from '../assets/images/about.jpeg';
import './AboutPage.css';

export const AboutPage = () => (
  <div className="AboutPage row">
    <div className="col-left">
      <img src={about} alt="about"/>
    </div>

    <div className="col-right">
      <div>
        <p>Carolyn Silver has dedicated her entire career to the pursuit of social justice, and has a multitude of
          experience in non-profit organizational leadership and management. As Chief Program Officer at Lenox Hill
          Neighborhood House, she gained significant experience leading diverse interdisciplinary teams, coaching and
          mentoring staff, providing strategic vision and programmatic oversight, and working collaboratively with
          myriad
          partners to ensure the highest quality of program operations. Throughout her leadership tenure, she created
          and
          implemented new areas of client-centered programming; ensured compliance with administrative and regulatory
          requirements; and engaged in fundraising activities with government and private philanthropy. She spearheaded
          Lenox Hill’s organizational efforts to improve outcome measurement and program evaluation, including
          facilitation of multiple new online case management systems, systemic data collection and dashboard creation,
          implementation of appropriate programmatic benchmarks, and the creation of programmatic needs assessments and
          ongoing program surveys.</p>

        <p>Trained as an attorney, Carolyn developed and expanded Lenox Hill Neighborhood House’s Civil Legal Services
          program, as Director of Legal Advocacy for more than eight years. She has been a steady leader throughout New
          York City’s legal services community for more than a decade. Carolyn was awarded the Felix Fishman award for
          Outstanding Advocacy on behalf of New York’s underserved communities in 2012 by New York Lawyers for the
          Public
          Interest (NYLPI) and was a Harvard Law School Wasserstein Fellow in 2013. From 2017-2019, she served as the
          Co-President of the Board of the New York State Legal Services Coalition, and was a founding member of LEAP, a
          New York City coalition of legal services providers.</p>

        <p>Before joining the Neighborhood House in 2005, Carolyn clerked for the Honorable Andre M. Davis in the United
          States District Court for the District of Maryland. She then received an Independence Foundation Fellowship to
          expand the housing advocacy project at the AIDS Law Project of Pennsylvania, where she represented people
          living
          with HIV/AIDS with their housing and other civil legal service needs. Immediately prior to joining Lenox Hill
          Neighborhood House, Carolyn was an associate at Steel Bellman Ritz &amp; Clark P.C., (and thereafter
          Ritz &amp; Clark LLP) a small civil rights law firm in New York City where she represented employees in
          employment discrimination matters.</p>

        <p>Carolyn graduated magna cum laude, Phi Beta Kappa from Tufts University (BA, Social Psychology) and graduated
          cum laude from the University of Pennsylvania Law School where she was a member of the Order of the Coif, a
          Senior Editor of the University of Pennsylvania Law Review, and was the recipient of the Henry Meachem Public
          Service Award.</p>
      </div>
    </div>
  </div>
);
