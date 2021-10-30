import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    color: #333;
    max-width: 800px;
    margin: 1rem auto;
    padding: 1rem;
    font-family: sans-serif;
    transition: all 0.25s linear;
  }

  button,
  input {
    color: #333;
  }

  a {
    color: dodgerblue;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default AppLayout;
