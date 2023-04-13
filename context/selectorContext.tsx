'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface PhoneContextProps {
  isPhoneActive: boolean;
  setIsPhoneActive: Dispatch<SetStateAction<boolean>>;
}

interface EmailContextProps {
  isEmailActive: boolean;
  setIsEmailActive: Dispatch<SetStateAction<boolean>>;
}

export const PhoneSelectorContext = createContext<PhoneContextProps>({
  isPhoneActive: false,
  setIsPhoneActive: () => {
    return null;
  },
});

export const EmailSelectorContext = createContext<EmailContextProps>({
  isEmailActive: false,
  setIsEmailActive: () => {
    return null;
  },
});

export function PhoneSelectorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPhoneActive, setIsPhoneActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);

  return (
    <PhoneSelectorContext.Provider value={{ isPhoneActive, setIsPhoneActive }}>
      <EmailSelectorContext.Provider
        value={{ isEmailActive, setIsEmailActive }}
      >
        {children}
      </EmailSelectorContext.Provider>
    </PhoneSelectorContext.Provider>
  );
}
