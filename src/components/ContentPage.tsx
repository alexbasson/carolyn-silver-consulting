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
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="grid">
          <div className="grid-inner">
            <div className="col-4-desktop col-2-tablet col-4-mobile img">
              <img src={image} alt={title}/>
            </div>

            <div className="col-8-desktop col-6-tablet col-4-mobile text">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
