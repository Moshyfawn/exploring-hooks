import React from 'react';
import styled from 'styled-components';

import BasicButton from './elements/buttons/basicButton';

import useTheme from "./hooks/useTheme";
import useWindowResize from "./hooks/useWindowResize";
import useCounter from "./hooks/useCounter";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { width, height } = useWindowResize();
  const { count, counter } = useCounter(0)

  const handleClick = (count) => {
    console.log(typeof(count))
    toggleTheme();
    counter(count)
  }

  return (
    <Container className={`App ${theme}`} theme={theme}>
      <Params>Page width: {width}</Params>
      <Params>Page height: {height}</Params>
      <Button
        type="button"
        label='Switch theme'
        onClick={() => handleClick(count + 1)}
        theme={theme}
      />
        <Desc count={count}>You changed your mind {count} times!</Desc>
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

const Params = styled.h3`
  margin: 0 0 5px 0;
`;

const Desc = styled.p`
  visibility: ${props => props.count > 0 ? 'visible' : 'hidden'};
`;

export default App;
