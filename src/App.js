import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

import BasicButton from './elements/buttons/basicButton';

import useTheme from "./hooks/useTheme";
// import useCount from './hooks/useCount';

const App = () => {  
  const { theme, toggleTheme } = useTheme();
  const [ count, setCount ] = useState(0)

  const handleClick = (count, e) => {
    toggleTheme();
    setCount(count + 1);
  }

  return (
    <Container className={`App ${theme}`} theme={theme}>
      <Button
        type="button"
        label='Switch theme'
        onClick={(e) => handleClick(count, e)}
        theme={theme}
      />
      <p>You changed your mind {count} times!</p>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme === 'dark' ? '#000' : '#fff'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
`;

const Button = styled(BasicButton)`
  padding: 20px;
  border: none;
  color: ${props => props.theme === 'dark' ? '#000' : '#fff'};
  background-color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  transform: scale(1);
  transition: transform .05s ease-in-out;
  &:active {
    transform: scale(.95);
  }
`;

export default App;
