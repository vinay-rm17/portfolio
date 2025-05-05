// src/Typing.js
import React, { useState, useEffect } from 'react';

/**
 * Typing component types through an array of phrases one by one.
 * After typing each phrase, it displays that line permanently and starts typing the next.
 */
function Typing({ phrases = [], typingSpeed = 100, pause = 1500 }) {
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    if (phraseIndex >= phrases.length) return;
    const current = phrases[phraseIndex];
    let timeout;

    if (currentText.length < current.length) {
      timeout = setTimeout(() => {
        setCurrentText(current.slice(0, currentText.length + 1));
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, current]);
        setCurrentText('');
        setPhraseIndex(idx => idx + 1);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [currentText, phraseIndex, phrases, typingSpeed, pause]);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
      {displayedLines.map((line, idx) => (
        <h1 key={idx}>{line}</h1>
      ))}
      {phraseIndex < phrases.length && (
        <h1>{currentText}<span className="caret">|</span></h1>
      )}
    </div>
  );
}

export default Typing;
