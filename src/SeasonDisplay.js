import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun'
  },
  winter: {
    text: "Brr, it's cold",
    iconName: 'snowflake'
  }
}

const getSeason = (lat) => {
  const month = new Date().getMonth();
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat);
  const {text, iconName} = seasonConfig[season];
  
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}></i>
      <h1>
        {text}
      </h1>
      <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
