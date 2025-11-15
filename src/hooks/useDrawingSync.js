import { useEffect, useState } from 'react';

const CANVAS_ID = 'default';

// Generate a random ID for the user
function generateUserId() {
  return 'user-' + Math.random().toString(36).substring(2, 10);
}

export function useDrawingSync() {
  const [strokes, setStrokes] = useState([]);
  const [userId] = useState(() => generateUserId());
  const [activeUsers, setActiveUsers] = useState([userId]); // Only you for now

  useEffect(() => {
    // Load from local memory (optional)
    const saved = localStorage.getItem(`strokes-${CANVAS_ID}`);
    if (saved) {
      setStrokes(JSON.parse(saved));
    }
  }, []);

  // Save every update
  useEffect(() => {
    localStorage.setItem(`strokes-${CANVAS_ID}`, JSON.stringify(strokes));
  }, [strokes]);

  const addStroke = (points, color, size) => {
    const newStroke = { points, color, size };
    setStrokes(prev => [...prev, newStroke]);
  };

  const clearCanvas = () => {
    setStrokes([]);
    localStorage.removeItem(`strokes-${CANVAS_ID}`);
  };

  return {
    strokes,
    addStroke,
    clearCanvas,
    activeUsers,
    userId
  };
}

