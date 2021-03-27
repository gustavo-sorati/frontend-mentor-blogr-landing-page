import styled from 'styled-components';
import { lighten, shade } from 'polished';

export const Nav = styled.nav`
  position: absolute;
  top: 80px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  z-index: 999;
  box-shadow: 2px 2px 7px -3px rgba(0,0,0,.25);

  .navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 20px;
  }

  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 20px;

    text-decoration: none;
    font-size: 1.3rem;
    color: hsl(237, 23%, 32%);
    font-weight: 700;

    &:hover {
      color: hsl(207, 13%, 34%);
    }

    img {
      display: flex;
      margin-left: 15px;
    }
  }

  .subitens {
    background-color: ${lighten(.9, "#000")};
    border-radius: 4px;
    width: 100%;

    li a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      padding: 10px;

      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: hsl(207, 13%, 34%);

    }
  }

  .login  {
    width: 100%;
    display: block;
    padding: 20px;

    border-top: 1px solid #c5c5c5;
  }

  .login button {
    display: block;
    background-color: transparent;
    margin: 0 auto;
    color: hsl(237, 23%, 32%);
  }

  .login [data-opt="true"]{
     background: linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
     border: none;
     color: #fff;
     transition: background .2s;

     &:hover {
       background: linear-gradient(to right, ${shade(.2, '#ff8f70')}, ${shade(.2, '#ff3d54')});
     }
  }


`;
