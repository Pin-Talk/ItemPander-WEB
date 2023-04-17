import { validateForm } from '@/utils/formValidation';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

export default function UserIdInput({
  htmlFor,
  label,
  placeholder,
}: InputProps) {
  const { register, setError } = useFormContext();
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex'>
        <ShareInput
          maxLength={13}
          register={register('userId', {
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              const message = validateForm.validEnglishWithNumber(e);
              return setError('userId', { message });
            },
          })}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
