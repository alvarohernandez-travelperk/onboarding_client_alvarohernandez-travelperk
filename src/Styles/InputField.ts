import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  height: 40px;
  padding: 0px 8px;
  width: 200px;
  &:active, &:focus &:focus-visible{
    color: #0e1012;
    border-color: #0e1012;
  }
`;

export const InputLabel = styled.label`
  color: #0e1012;
  background-color: transparent;
  text-decoration: none;
  font-weight: 400;
  padding-right: 8px;
`;

export const InputBox = styled.span`
  margin: 10px 0px;
`;