// src/hooks/useLocalStorage.js

import { useState, useEffect } from 'react';

/**
 * Custom hook to persist a value in localStorage.
 * @param {string} key Storage key
 * @param {any} initialValue Default value if nothing in storage
 * @returns {[any, function]} Value and setter
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('useLocalStorage get error', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn('useLocalStorage set error', error);
    }
  };

  return [storedValue, setValue];
}
