import { cls } from '@/utils/cls';
import { forwardRef } from 'react';
import { InputProps } from './types';

const ShareInput = ({
  htmlFor,
  placeholder,
  maxLength,
  type = 'text',
  width,
  register,
}: InputProps) => {
  return (
    <input
      {...register}
      className={cls(
        'px-2 py-1 rounded-md bg-transparent border-2 border-gray-200 text-gray-400',
        width ? width : 'w-full'
      )}
      type={type}
      id={htmlFor}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

export default ShareInput;
