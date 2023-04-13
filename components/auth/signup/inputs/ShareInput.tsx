import { SelectorContext } from '@/context/selectorContext';
import { cls } from '@/utils/cls';
import { useContext } from 'react';
import { InputProps } from '../types';

const ShareInput = ({
  htmlFor,
  placeholder,
  maxLength,
  type = 'text',
  width,
  register,
}: InputProps) => {
  const { setIsActive } = useContext(SelectorContext);
  return (
    <input
      onClick={() => setIsActive(false)}
      {...register}
      className={cls(
        'px-2 py-1 rounded-md bg-transparent border-2 border-gray-200 text-gray-400',
        width ? width : 'w-full'
      )}
      type={type}
      id={htmlFor}
      placeholder={placeholder}
      maxLength={maxLength}
      autoComplete={type === 'password' ? 'current-password' : 'on'}
    />
  );
};

export default ShareInput;
