import styled from 'styled-components'


export const Card = styled.div`
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
  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: auto;
  }

  ul {
    list-style-type: none;
    padding: 20px;
    margin: 0px;

    li {
      padding: 2px;
    }
  }
`
export const Button = styled.button`
    border: 1px solid #0e1012;
    border-radius: 5px;
    height: 40px;
    width: 80px;
    padding: 0px 8px;
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

export const TextBox = styled.div`
  background-color: transparent;
  display: flex;
  margin: 10px;
`
export const IngredientsBox = styled.div`
  background-color: transparent;
  display: flex;
  margin: 10px;
  flex-direction: column;
`

export const Text = styled.p`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
`
export const TextBold = styled.p`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
  font-weight: 700;
  padding-right: 8px;
`