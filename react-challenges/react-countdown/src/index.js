import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import App from './App';

const Wrapper = styled.div`
  margin: 20vh 10vw;

  label{
    display: block;
    margin-bottom: 3px;
  }

  input{
    margin-left: 5px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

