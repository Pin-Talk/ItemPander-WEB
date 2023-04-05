import ShareInput from './ShareInput';
import { InputProps } from './types';

const NumberInput = ({
  placeholder,
  type = 'text',
  maxLength,
  register,
}: InputProps) => {
  return (
    <ShareInput
      {...register}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};
export default NumberInput;
