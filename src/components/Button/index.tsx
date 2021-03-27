import React from 'react';

import {ButtonComp} from './styles';


const Button: React.FC = (props) => {
  return (
    <ButtonComp {...props}>
       {props.children}
    </ButtonComp>
  )
}

export default Button;
