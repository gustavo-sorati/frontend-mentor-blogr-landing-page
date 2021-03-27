import styled from 'styled-components';

import circlesPattern from '../../assets/bg-pattern-circles.svg';


export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  color: hsl(237, 23%, 32%);
`;

export const Section = styled.section`
  padding: 120px 24px 40px 24px;

  &.darker {
    background: url(${circlesPattern}) no-repeat 29% -109%/ 112% ,hsl(237, 17%, 21%);
    margin-top: 240px;
    position: relative;
    border-radius: 0 60px 0 60px;
    min-height: 400px;

    ${Title} {
      color: #fff;
      line-height: 1.8;
      padding-top: 240px;
    }

    p {
      color: #fff;
      opacity: .6;
      line-height: 1.8;
      padding-bottom: 60px;
    }

    img {
      position: absolute;
      top: -200px;
      width: 100%;
      left: 50%;
      transform: translateX(-50%)
    }
  }

  & + .section {
    padding: 0 24px 40px 24px;

  }

  img {
    margin-top: 40px;
  }

  p {
    font-family: 'Overpass', sans-serif;
    font-weight: 300;
    line-height: 1.4;
    color: #444;
    margin-top: 24px;
    text-align: center;
  }
`;


