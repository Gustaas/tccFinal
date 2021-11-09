import styled from 'styled-components'


export const ContadorDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;

  & > * {
    margin: .5em;
    background-color: #f5f5f5;
    padding: 0.3em .8em;
    user-select: none;
  }

  .contador2 {
   display: flex;
   flex-direction: row;
  }

  .menos {
    border-radius: 100%;
    cursor: pointer;
  }

  .quantidade {
    padding: 0.3em 1em;
  }

  .mais {
    border-radius: 100%;
    cursor: pointer;
  }
`