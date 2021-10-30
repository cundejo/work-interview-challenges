import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid dodgerblue;
  background-color: dodgerblue;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: cornflowerblue;
    border-color: cornflowerblue;
  }
`;

export default Button;
