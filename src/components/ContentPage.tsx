import React from 'react';
import './ContentPage.css'

interface Props {
  title: string;
  image: string;
}

export const ContentPage: React.FC<Props> = ({title, image, children}) => (
  <div className="ContentPage">
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="row">
        <div className="col-left">
          <img src={image} alt={title}/>
        </div>

        <div className="col-right">
          {children}
        </div>
      </div>
    </div>
  </div>
);
