'use client';

import { useEffect, useState } from 'react';

const responsiveSize = {
  tablet: 768,
  mobile: 390,
  desk: 1280,
};

const useWindowSize = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleSize = () => setValue(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setValue(window.innerWidth);
    }
  }, []);

  return {
    tablet: responsiveSize.tablet,
    mobile: responsiveSize.mobile,
    desk: responsiveSize.desk,
    currentSize: value,
  };
};
export default useWindowSize;
