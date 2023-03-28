import { InputProps } from './types';

const NumberInput = ({
  placeholder,
  type = 'text',
  maxLength,
  register,
}: InputProps) => {
  return (
    <input
      {...register}
      className='p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200
      placeholder:text-gray-300 placeholder:text-sm
      '
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};
export default NumberInput;
