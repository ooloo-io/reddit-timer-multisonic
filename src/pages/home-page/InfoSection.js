import React from 'react';

import { InfoLink, Section } from './InfoSection.style';

function InfoSection() {
  return (
    <Section>
      <h2>How it works</h2>
      <div>
        <ul>
          <li>We find the 500 top posts from the past year for a subreddit.</li>
          <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
          <li>See immediately when to submit your reddit post.</li>
        </ul>
      </div>
      <h2>About</h2>
      <div>
        This app was created during a course on
        {' '}
        <InfoLink as="a" href="https://ooloo.io/">ooloo.io</InfoLink>
        {' '}
        with the goal to implement a pixel-perfect real-world application with professional
        workflows and tools like Kanban, ClickUp, Zeplin, GitHub, pull requests and code
        reviews.
        {' '}
        <InfoLink as="a" href="https://ooloo.io/employers/">Click here for more information.</InfoLink>
      </div>
    </Section>
  );
}

export default InfoSection;
