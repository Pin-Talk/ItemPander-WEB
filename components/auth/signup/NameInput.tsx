import ShareInput from './ShareInput';
import { InputProps } from './types';

const NameInput = ({
  htmlFor,
  label,
  type,
  placeholder,
  register,
}: InputProps) => {
  return (
    <div className='flex items-center'>
      <label className='font-bold mr-6' htmlFor={htmlFor}>
        {label}
      </label>
      <ShareInput
        register={register}
        type={type}
        htmlFor={htmlFor}
        placeholder={placeholder}
        width='80px'
      />
    </div>
  );
};
export default NameInput;
