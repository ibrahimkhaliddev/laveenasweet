import React from 'react';

const TimelineItem = ({ imageUrl, date, title, text, reverse }) => {
  const reverseClasses = reverse ? 'qodef-reverse' : '';
  
  return (
    <div className={`qodef-e qodef-e-item ${reverseClasses}`}>
      <div className="qodef-e-line-holder">
        <span className="qodef-e-line"></span>
      </div>
      <div className="qodef-e-item-inner">
        <div className="qodef-e-point-holder">
          <div className="qodef-e-point"></div>
        </div>
        <div className="qodef-e-side-holder">
          <div className="qodef-e-image">
            <img
              loading="lazy"
              src={imageUrl}
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="qodef-e-content-holder">
          <div className="qodef-e-date">{date}</div>
          <h4 className="qodef-e-title">{title}</h4>
          <p className="qodef-e-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
