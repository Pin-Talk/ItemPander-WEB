'use client';

import { useEffect, useState } from 'react';

const responsiveSize = {
  tablet: 768,
  mobile: 390,
  desk: 1280,
};

const useWindowSize = () => {
  const [value, setValue] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setValue(window.innerWidth);
    };

    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  useEffect(() => {
    setValue(window.innerWidth);
  }, []);

  return {
    tablet: responsiveSize.tablet,
    mobile: responsiveSize.mobile,
    desk: responsiveSize.desk,
    currentSize: value,
  };
};
export default useWindowSize;
