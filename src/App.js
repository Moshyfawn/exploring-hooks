import React from 'react';

import useTheme from "./hooks/useTheme";

const App = () => {  
    const { theme, toggleTheme } = useTheme();
    return (
      <div
      className={`App ${theme}`}
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <button type="button" onClick={toggleTheme}>
					Switch theme
				</button>
      </div>
    );
  }

export default App;
