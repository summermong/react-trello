import { useCallback, useState } from 'react';

export const useToggle = (initialChecked: boolean = false): [boolean, () => void] => {
  const [checked, setChecked] = useState(initialChecked);
  const toggleChecked = useCallback(() => setChecked(checked => !checked), []);

  return [checked, toggleChecked];
};
