import React, { useState } from 'react';

function TextEditor() {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState('16px');
  const [fontWeight, setFontWeight] = useState('normal');
  const [isItalic, setIsItalic] = useState(false);
  const [characterSpacing, setCharacterSpacing] = useState('normal');
  const [alignment, setAlignment] = useState('left');
  const [textColor, setTextColor] = useState('#000000');

  const applyStyles = () => {
    const styles = {
      fontFamily: font,
      fontSize: fontSize,
      fontWeight: fontWeight,
      fontStyle: isItalic ? 'italic' : 'normal',
      letterSpacing: characterSpacing,
      textAlign: alignment,
      color: textColor,
    };
    return styles;
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          {/* Add more font options */}
        </select>
      </div>
      <div>
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="16px">16px</option>
          <option value="20px">20px</option>
          {/* Add more font size options */}
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isItalic}
            onChange={() => setIsItalic(!isItalic)}
          />
          Italic
        </label>
      </div>
      <div>
        <select
          value={characterSpacing}
          onChange={(e) => setCharacterSpacing(e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="1px">1px</option>
          {/* Add more character spacing options */}
        </select>
      </div>
      <div>
        <select value={alignment} onChange={(e) => setAlignment(e.target.value)}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <div>
        <button onClick={applyStyles}>Apply</button>
      </div>
      <div>
        <div style={applyStyles()}>{text}</div>
      </div>
    </div>
  );
}

export default TextEditor;
