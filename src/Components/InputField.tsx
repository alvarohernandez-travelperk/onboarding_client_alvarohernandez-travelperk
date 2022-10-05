import React from 'react'


interface InputFieldProps {
  placeholder: string;
  title: string;
  value: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputField({ placeholder, title, value, handleInput }: InputFieldProps) {
  return (
    <span>
      <label>{title}</label>
<input
      onChange={handleInput}
      type="text"
      value={value}
      placeholder={placeholder}></input>    </span>
  )
}
