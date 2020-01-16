import React, {useEffect} from 'react';
import '../styles/ContentPage.scss'

interface Props {
  title: string;
  image: string;
}

export const ContentPage: React.FC<Props> = ({title, image, children}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ContentPage">
      <h1 className="title">{title}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-2 col-sm-4 img">
            <img src={image} alt={title}/>
          </div>

          <div className="col-lg-8 col-md-6 col-sm-4 text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
