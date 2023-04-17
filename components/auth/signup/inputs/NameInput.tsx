import { validateForm } from '@/utils/formValidation';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

const NameInput = ({
  htmlFor,
  label,
  type = 'text',
  placeholder,
}: InputProps) => {
  const { register, setError } = useFormContext();
  return (
    <div className='flex items-center'>
      <label className='font-bold mr-6' htmlFor={htmlFor}>
        {label}
      </label>
      <ShareInput
        register={register('name', {
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            const message = validateForm.invalidNumberCheck(e);
            console.log(message);
            return setError('name', { message });
          },
        })}
        maxLength={10}
        type={type}
        htmlFor={htmlFor}
        placeholder={placeholder}
        width='80px'
      />
    </div>
  );
};
export default NameInput;
