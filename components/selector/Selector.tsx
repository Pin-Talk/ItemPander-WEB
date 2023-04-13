'use client';

import { SelectorContext } from '@/context/selectorContext';

import { cls } from '@/utils/cls';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  boardItems: string[];
  width?: string;
  height?: string;
}

const Selector = ({ value, setValue, boardItems, width, height }: Props) => {
  const { isActive, setIsActive } = useContext(SelectorContext);

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  const handleValue = (number: string) => {
    setValue(number);
    setIsActive(false);
  };

  return (
    <div
      className={cls(
        'px-2 py-1 rounded-md bg-transparent border-2 border-gray-200 text-gray-400 relative cursor-pointer',
        width || ''
      )}
    >
      {value}
      <div
        onClick={handleActive}
        className='absolute right-1 top-[50%] -translate-y-1/2 text-white cursor-pointer'
      >
        <MdKeyboardArrowDown className='w-5 h-5' />
      </div>

      <div
        className={cls(
          'absolute px-2 py-1 rounded-md bg-gray-100 text-gray-400 -left-1 top-10 transition-all origin-top-left z-10 overflow-auto',
          width || '',
          isActive ? 'scale-y-1' : 'scale-y-0',
          height || ''
        )}
      >
        {boardItems.map((item) => (
          <div
            onClick={() => handleValue(item)}
            className={cls(
              'p-1 text-gray-800 rounded-md text-sm',
              value === item ? 'bg-sky-100' : ''
            )}
            key={item}
          >
            <span className=''>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Selector;
