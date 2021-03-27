import styled from 'styled-components';

export const ButtonComp = styled.button`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2rem;
  margin-top: 48px;
  border: 2px solid #fff;
  border-radius: 36px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  padding: 16px;
  background: transparent;

  transition: .2s;

  &:hover {
    background: #fff;
    color: hsl(13, 100%, 72%);

    &[data-select="true"] {
      opacity: .6;
    }
  }

  &[data-select="true"] {
    color: hsl(13, 100%, 72%);
    background-color: #fff;
  }
`;
