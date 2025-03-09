import React from 'react';
import Styles from './Leader.module.css';

const Leader = () => {
  return (
    <div className={Styles.section}>
      <div className={Styles.heading}>
        <h2>Leadership</h2>
      </div>

      <div className={Styles.subheading}>
        <h1>Join Asia's largest community of impact makers</h1>
      </div>

      <div className={Styles.description}>
        <p>
          A movement to shape business for greater humanity. To make this a little engaging we can include numbers
        </p>
      </div>

      <div className={Styles.metrics}>
        <div className={Styles.metric}>
          <div className={Styles.metricCircle}>
            <p>120+</p>
          </div>
          <div className={Styles.metricLabel}>
            <p>Changemakers Engaged</p>
          </div>
        </div>

        <div className={Styles.metric}>
          <div className={Styles.metricCircle}>
            <p>100K+</p>
          </div>
          <div className={Styles.metricLabel}>
            <p>Social Media Impressions</p>
          </div>
        </div>

        <div className={Styles.metric}>
          <div className={Styles.metricCircle}>
            <p>6</p>
          </div>
          <div className={Styles.metricLabel}>
            <p>Curated Impact Events</p>
          </div>
        </div>

        <div className={Styles.metric}>
          <div className={Styles.metricCircle}>
            <p>10+</p>
          </div>
          <div className={Styles.metricLabel}>
            <p>Strategic Partnerships</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;