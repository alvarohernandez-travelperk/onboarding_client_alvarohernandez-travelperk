import React from 'react'
import { Input, InputLabel, InputBox } from '../Styles/InputField'


interface InputFieldProps {
  placeholder: string;
  title: string;
  value: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputField({ placeholder, title, value, handleInput }: InputFieldProps) {
  return (
    <InputBox>
      <InputLabel>{title} :</InputLabel>
      <Input
        onChange={handleInput}
        type="text"
        value={value}
        placeholder={placeholder}></Input>
    </InputBox>
  )
}
