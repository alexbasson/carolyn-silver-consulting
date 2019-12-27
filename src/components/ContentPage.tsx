import React, {FunctionComponent} from 'react';
import './ContentPage.css'

interface Props {
  title: string;
}

export const ContentPage: FunctionComponent<Props> = ({title, children}) => (
  <div className="ContentPage">
    <h1 className="title">{title}</h1>
    {children}
  </div>
);
