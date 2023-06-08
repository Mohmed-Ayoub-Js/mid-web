import React, { useState } from 'react';

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <button className="theme-button" onClick={toggleTheme}>
      💡
    </button>
  );
};

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

};

export default App;
