import styled from 'styled-components'

export const Main = styled.div`
  padding: 20px 0px;
  border-top: 1px solid #a3a3a3;

  span {
    padding: 10px 0px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
    border: 1px solid #0e1012;
    border-radius: 5px;
    height: 40px;
    cursor: pointer;
    background-color: #0e1012;
    color: #eaeaea;
    margin: 0px 10px;
    &:hover:enabled{
      color: #0e1012;
      border-color: #0e1012;
      background-color: #eaeaea;
    }
`

export const List = styled.ul`
    list-style-type: none;
    padding: 20px;
    margin: 0px;

    li {
      padding: 2px;

      span {
        padding-left: 10px;
        cursor: pointer;
      }
    }
`