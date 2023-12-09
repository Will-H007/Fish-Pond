import React from 'react';

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({ value, children, set, min = 2, max = 8 }) => {
  return (
    <label>
      <code style={{margin:"0.5em", fontSize:"1em"}}>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
        style={{margin:"1em"}}
      />
    </label>
  );
};

export default Input;
