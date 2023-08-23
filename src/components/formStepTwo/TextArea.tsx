
import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange }) => {
  return (
    <div className="textarea-container">
      <label className="textarea-label">{label}</label>
      <textarea
      className="textarea-input"
      value={value}
      onChange={onChange} />
    </div>
  );
};


export default TextArea;