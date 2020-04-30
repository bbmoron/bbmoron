import React from 'react';
import styled from 'styled-components';

import { useDencrypt } from 'use-dencrypt-effect';
import ParticlesBg from 'particles-bg';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
  font-size: 38pt;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
`;

const Footer = styled.div`
  width: 100vw;
  height: 60px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  font-size: 14pt;
  color: black;
  text-shadow: none;
`;

const FooterItem = styled.p`
  padding-left: 15px;
  padding-right: 15px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: rgba(0,0,0,0.7);
  }
`;

const values = [
  'Hello, I\'m Alexandr Romanov',
  'Crypto enthusiast',
  'JavaScript developer', 
  'Golang developer', 
  'Full-stack developer',
  'Open-source contributor',
  'Pentesting hobbyist'
];

export const App = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <Wrap>
      {result}
      <ParticlesBg type="circle" bg={true} />
      <Footer>
        <FooterItem>
          <Link href="https://github.com/bbmoron" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>  
        </FooterItem>
        <FooterItem>
          <Link href="https://instagram.com/bbmxrxn" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        </FooterItem>
        <FooterItem>
          <Link href="https://twitter.com/@bbmxrxn" target="_blank" rel="noopener noreferrer">
            Twitter
          </Link>
        </FooterItem>
      </Footer>
    </Wrap>
  );
};