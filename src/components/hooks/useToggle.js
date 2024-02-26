import { useState } from 'react';

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  return [value, () => setValue((v) => !v)];
}
