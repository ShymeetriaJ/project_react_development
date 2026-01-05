import { useState, useEffect } from 'react';

const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {

            const item = window.localStorage.getItem(key);
            
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            return initialValue;
        }
    });
    useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
      
    } catch (err) {
       console.error('Failed to save to localStorage:', err);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};
export default useLocalStorage;