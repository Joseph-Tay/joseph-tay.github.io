/ src/hooks/useExpandable.js
import { useState } from 'react';

export const useExpandable = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (category, id) => {
    const key = `${category}-${id}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: prev[key] ? null : id
    }));
  };

  const isExpanded = (category, id) => {
    const key = `${category}-${id}`;
    return expandedItems[key] === id;
  };

  return { toggleExpanded, isExpanded };
};