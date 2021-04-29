import React from 'react';
import './TitleMain.css';


const TitleMain = (props) => {
  return (
    <div className="box-texts-header">
      <div className="box-texts-main">
        <h1 className="h-white">deve</h1>
      </div>

      <h1 className="h-orange">loper</h1>
      <h1 className="h-white-desktop">deve<span>loper</span></h1>
      <h2>Front-end | QA Engineer</h2>

    </div>
  );
};

export default TitleMain;