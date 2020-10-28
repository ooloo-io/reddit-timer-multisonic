import React from 'react';
import { Link } from 'react-router-dom';
import table from '../../images/table.png';
import table2x from '../../images/table@2x.png';
import table3x from '../../images/table@3x.png';

import {
  CTAButton, Header, HeroLink, Section, SubredditLabel, Subtitle, TableImage,
} from './HeroSection.style';
import config from '../../config/config';

function HeroSection() {
  const { defaultSubreddit } = config;
  return (
    <Section>
      <Header>No reactions to your reddit posts?</Header>
      <Subtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </Subtitle>
      <Link to={`/search/${defaultSubreddit}`}>
        <CTAButton>Show me the best time</CTAButton>
      </Link>
      <SubredditLabel>
        r/
        {defaultSubreddit}
      </SubredditLabel>
      <HeroLink to={`/search/${defaultSubreddit}`}>
        <TableImage
          alt="Example Table of Reddit Results"
          src={table}
          srcSet={`${table2x} 2x,
        ${table3x} 3x`}
        />
      </HeroLink>
    </Section>
  );
}

export default HeroSection;
