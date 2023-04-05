import { cls } from '@/utils/cls';
import { forwardRef } from 'react';
import { InputProps } from './types';

const ShareInput = forwardRef(
  (
    {
      register,
      htmlFor,
      placeholder,
      maxLength,
      type = 'text',
      width,
    }: InputProps,
    ref
  ) => {
    return (
      <input
        {...register}
        className={cls(
          'p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 text-gray-400',
          width ? width : 'w-full'
        )}
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    );
  }
);

export default ShareInput;
