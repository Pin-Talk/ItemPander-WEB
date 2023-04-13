'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const SelectorContext = createContext<ContextProps>({
  isActive: false,
  setIsActive: () => {
    return null;
  },
});

export function SelectorProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SelectorContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </SelectorContext.Provider>
  );
}
