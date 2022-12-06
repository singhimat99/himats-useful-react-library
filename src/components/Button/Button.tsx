import React from 'react';
interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div>{props.label}</div>
  )
}

export default Button;
