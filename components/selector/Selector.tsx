'use client';

import { cls } from '@/utils/cls';
import { Dispatch, SetStateAction } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  boardItems: string[];
  width?: string;
  height?: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Selector = ({
  isActive,
  setIsActive,
  value,
  setValue,
  boardItems,
  width,
  height,
}: Props) => {
  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  const handleSetValue = (
    e: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    e.stopPropagation();
    setIsActive(false);
    setValue(value);
  };

  return (
    <div
      onClick={handleActive}
      className={cls(
        'px-2 py-1 rounded-md bg-transparent border-2 border-gray-200 text-gray-400 relative cursor-pointer',
        width || ''
      )}
    >
      {value}
      <div className='absolute right-1 top-[50%] -translate-y-1/2 text-white cursor-pointer'>
        <MdKeyboardArrowDown className='w-5 h-5' />
      </div>

      <div
        className={cls(
          'absolute px-2 py-1 rounded-md bg-gray-100 text-gray-400 -left-1 top-10 transition-all origin-top-left z-10 overflow-auto overflow-y-scroll',
          width || '',
          isActive ? 'scale-y-1' : 'scale-y-0',
          height || ''
        )}
      >
        {boardItems.map((item) => (
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              handleSetValue(e, item)
            }
            className={cls(
              'p-1 text-gray-800 rounded-md text-sm',
              value === item ? 'bg-sky-100' : ''
            )}
            key={item}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Selector;
