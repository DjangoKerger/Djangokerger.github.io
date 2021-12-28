import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi! I'm Django, a front end developer. I love learning, problem solving, and working together.
      I'll be a valueable addition to any team. 
      </SectionText>
      <Button onClick={()=> window.location = 'https://github.com/DjangoKerger' }>Github</Button>
    </LeftSection>
  </Section>
);

export default Hero;