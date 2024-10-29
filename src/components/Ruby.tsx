import React from 'react';

interface RubyProps {
  text: string;
}

export const Ruby: React.FC<RubyProps> = ({ text }) => {
  const parts = text.split(/(\{[^}]+\})/);
  
  return (
    <span className="ruby-text">
      {parts.map((part, index) => {
        if (part.startsWith('{') && part.endsWith('}')) {
          // フリガナ部分は無視（前の漢字のルビとして使用済み）
          return null;
        }
        
        const nextPart = parts[index + 1];
        const ruby = nextPart?.match(/\{([^}]+)\}/)?.[1];
        
        return ruby ? (
          <ruby key={index}>
            {part}<rt>{ruby}</rt>
          </ruby>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </span>
  );
};