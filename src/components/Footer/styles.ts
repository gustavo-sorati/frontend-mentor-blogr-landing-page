import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: hsl(240, 10%, 16%);
  border-radius: 0 68px 0 0;

  padding: 40px;

  ul {
    padding-top: 20px;
  }

  li {
    list-style: none;
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #fff;
    opacity: .5;
    line-height: 1.8;
  }

  li.indice a {
    opacity: inherit;
    margin: 16px 0;
  }
`;

export const Mentor = styled.div`
  padding-top: 20px;
  color: #fff;
  display: flex;
  text-align: center;

  a {
    color: #fff;
  }
`;

