import styled from 'styled-components'

const StyledBlock = styled.div`
    background-color: lightblue;
    border-radius: 4px;
    width:100px;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;

  &:hover{
    background-color: lightskyblue;
    cursor: pointer;
  }

  & span{
    font-size: 3em;
    color: dimgray;
  }
`;

const Block = ({value, index, onClick}) => {

  return (
    <StyledBlock onClick={() => onClick(index)}>
      <span>
        {value}
      </span>
    </StyledBlock>
  );
}

export default Block;
