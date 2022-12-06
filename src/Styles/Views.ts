import styled from 'styled-components';

export const Main = styled.div`
  margin: 0px;
  display: flex;
  padding: 20px 40px;
  justify-content: space-around;

  h2 {
    margin: 0px;
    font-weight: 400;
    padding: 20px 0px;
  }
`;

export const Button = styled.button`
    border: 1px solid #0e1012;
    border-radius: 5px;
    height: 40px;
    width: 180px;
    padding: 0px 8px;
    cursor: pointer;
    background-color: #0e1012;
    color: #eaeaea;
    &:disabled{
      background-color: #f2f2f2;
      color: #c6c1be;
      border-color: #eaeaea;
      cursor: not-allowed;
    }
    &:hover:enabled{
      color: #0e1012;
      border-color: #0e1012;
      background-color: #eaeaea;
    }
`

export const FormCard = styled.div`
  padding: 20px;
  overflow: hidden;
  min-width: 300px;
  border: 1px solid #eaeaea;
  background-color: #fafafa;
  border-radius: 5px;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
`

export const ButtonsBox = styled.div`
  padding: 20px;
  min-width: 300px;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
  align-items: end;
`

