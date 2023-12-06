import React from 'react';

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({ value, children, set, min = -200, max = 200 }) => {
  return (
    <label>
      <code style={{margin:"10px"}}>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
        style={{margin:"10px"}}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
};

export default Input;
