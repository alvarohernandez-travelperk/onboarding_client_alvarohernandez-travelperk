import dompurify from 'dompurify';
import React from 'react';
import { Input, InputBox, InputLabel } from '../Styles/InputField';


interface InputFieldProps {
  placeholder: string;
  title: string;
  value: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputField({ placeholder, title, value, handleInput }: InputFieldProps) {
  const sanitizedValue = dompurify.sanitize(value);
  return (
    <InputBox>
      <InputLabel data-testid="input-label">{title} :</InputLabel>
      <Input
        data-testid="input-field"
        onChange={handleInput}
        type="text"
        value={sanitizedValue}
        placeholder={placeholder}></Input>
    </InputBox>
  )
}
