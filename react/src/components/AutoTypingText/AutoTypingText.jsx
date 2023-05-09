import React, { useEffect, useState } from 'react';

function AutoTypingText({ text }) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines(text.split("\n"));
  }, [text]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        const line = lines[i];
        setLines(prevLines => {
          const newLines = [...prevLines];
          newLines[i] = line;
          return newLines;
        });
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lines]);

  return (
    <span>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
}



export default AutoTypingText;
