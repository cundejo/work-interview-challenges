import {darkTheme, lightTheme} from "./theme/themes";
import {GlobalStyles} from "./theme/global";
import styled, {ThemeProvider} from "styled-components";
import React, {useState} from "react";
import Game from "./components/Game";

const ThemeButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 5px;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeButton onClick={()=>toggleTheme()}>{theme === 'light' ? 'Change to dark theme 🌙' : 'Change to light theme ☀️'}</ThemeButton>
      <Game />
    </ThemeProvider>
  )
}

export default App;
