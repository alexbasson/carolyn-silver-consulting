import React from 'react';
import './ContentPage.css'

interface Props {
  title: string;
}

export const ContentPage: React.FC<Props> = ({title, children}) => (
  <div className="ContentPage">
    <h1 className="title">{title}</h1>
    {children}
  </div>
);
