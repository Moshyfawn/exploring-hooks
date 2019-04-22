import React from 'react';
import styled from 'styled-components';

import BasicButton from './elements/buttons/basicButton';

import useTheme from "./hooks/useTheme";

const App = () => {  
    const { theme, toggleTheme } = useTheme();
    return (
      <Container className={`App ${theme}`} theme={theme}>
        <Button
          type="button"
          label='Switch theme'
          onClick={toggleTheme}
          theme={theme}
        />
      </Container>
    );
  }

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
