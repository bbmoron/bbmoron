import React from 'react';
import styled from 'styled-components';

import { useDencrypt } from 'use-dencrypt-effect';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import ParticlesBg from 'particles-bg';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
  font-size: ${ isMobile ? '24pt' : '36pt' };
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  background: black;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = styled.div`
  width: 100vw;
  height: ${ isMobile ? '180px' : '120px' };
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: ${ isMobile ? '40px' : '0' };
  left: 0;
  font-size: 14pt;
  color: white;
  text-shadow: none;
`;

const FooterItem = styled.p`
  padding-left: 15px;
  padding-right: 15px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: rgba(255,255,255,0.6);
  }
`;

const Overflow = styled.div`
  position: absolute;
  top: ${ isMobile ? '40' : '50' };
  left: 50;
`;

const values = [
  'I\'m Alexandr Romanov',
  'Crypto enthusiast',
  'JavaScript developer', 
  'Golang developer', 
  'Open-source contributor',
  'Bug bounty hunter'
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
      <Overflow>{result}</Overflow>
      <ParticlesBg type="cobweb" num={30} color={'#ffffff'} bg={false} />
      { isMobile && (<Footer>
        <Row>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/cipher.pdf'} target="_blank" rel="noopener noreferrer">
              Cipher
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/cryptopus.pdf'} target="_blank" rel="noopener noreferrer">
              Cryptopus
          </Link>
          </FooterItem>
        </Row>
        <Row>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/dtra.pdf'} target="_blank" rel="noopener noreferrer">
              dtra.io
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/casper_api.pdf'} target="_blank" rel="noopener noreferrer">
              Casper API
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/ipfs.pdf'} target="_blank" rel="noopener noreferrer">
              IPFS
          </Link>
          </FooterItem>
        </Row>
        <Row>
          <FooterItem>
            <Link href="https://github.com/bbmoron" target="_blank" rel="noopener noreferrer">
              GitHub
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/CV.pdf'} target="_blank" rel="noopener noreferrer">
              CV
          </Link>
          </FooterItem>
        </Row>
        <Row>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/hackerrank.pdf'} target="_blank" rel="noopener noreferrer">
              Hackerrank
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://hackerone.com/bbmoron" target="_blank" rel="noopener noreferrer">
              HackerOne
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://www.linkedin.com/in/rmnff/" target="_blank" rel="noopener noreferrer">
              LinkedIn
          </Link>
          </FooterItem>
        </Row>
      </Footer>) }
      { isBrowser && (<Footer>
        <Row>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/cipher.pdf'} target="_blank" rel="noopener noreferrer">
              Cipher
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/cryptopus.pdf'} target="_blank" rel="noopener noreferrer">
              Cryptopus
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/dtra.pdf'} target="_blank" rel="noopener noreferrer">
              dtra.io
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/casper_api.pdf'} target="_blank" rel="noopener noreferrer">
              Casper API
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/ipfs.pdf'} target="_blank" rel="noopener noreferrer">
              IPFS
          </Link>
          </FooterItem>
        </Row>
        <Row>
          <FooterItem>
            <Link href="https://github.com/bbmoron" target="_blank" rel="noopener noreferrer">
              GitHub
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/CV.pdf'} target="_blank" rel="noopener noreferrer">
              CV
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href={process.env.PUBLIC_URL + '/hackerrank.pdf'} target="_blank" rel="noopener noreferrer">
              Hackerrank
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://www.linkedin.com/in/rmnff/" target="_blank" rel="noopener noreferrer">
              LinkedIn
          </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://instagram.com/bbmxrxn" target="_blank" rel="noopener noreferrer">
              Instagram
          </Link>
          </FooterItem>
        </Row>
      </Footer>) }
    </Wrap>
  );
};
