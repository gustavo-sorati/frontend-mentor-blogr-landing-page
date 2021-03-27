import styled from 'styled-components';

import patternBackground from '../../assets/bg-pattern-intro.svg';

export const Container = styled.header`
  width: 100%;
  background: url(${patternBackground}) no-repeat 43% 37%/625%,linear-gradient(hsl(13,100%,72%),hsl(353,100%,62%));
  padding: 40px 24px 120px 24px;
  border-radius: 0 0 0 68px;

  height: 95vh;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const Information = styled.div`
  margin: 220px auto 0 auto;

  h1 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
  }

  p {
    margin-top: 40px;
    color: #fff;
    opacity: .6;
    text-align: center;
    line-height: 1.4;
    font-size: 1.4rem;
  }

  .options {
    display: flex;
    justify-content: space-between;
  }
`;
