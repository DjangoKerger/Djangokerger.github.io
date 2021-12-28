import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" >
          <NavLink>Projects</NavLink>
        </Link> 
      </li>
      <li>
        <Link href="#tech" >
          <NavLink>Technologies</NavLink>
        </Link> 
      </li>
      <li>
        <Link href="#aboutme" >
          <NavLink>About Me</NavLink>
        </Link> 
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/DjangoKerger">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/django-kerger-5a1a081a8/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/DjangoKerger">
        <AiFillInstagram size = "3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
