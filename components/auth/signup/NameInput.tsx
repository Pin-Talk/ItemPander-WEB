import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';
import { InputProps } from './types';

const NameInput = ({
  htmlFor,
  label,
  type = 'text',
  placeholder,
}: InputProps) => {
  const { register } = useFormContext();
  return (
    <div className='flex items-center'>
      <label className='font-bold mr-6' htmlFor={htmlFor}>
        {label}
      </label>
      <ShareInput
        register={register('name')}
        type={type}
        htmlFor={htmlFor}
        placeholder={placeholder}
        width='80px'
      />
    </div>
  );
};
export default NameInput;
