import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 832-766-1730">832-766-1730</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: Kerger06@aol.com">832-766-1730</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Have an "always be learning" mindset</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/DjangoKerger">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/django-kerger-5a1a081a8/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/DjangoKerger">
        <AiFillInstagram size = "3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
