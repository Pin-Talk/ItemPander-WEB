'use client';

import { useFormContext } from 'react-hook-form';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

export default function PasswordInput({
  htmlFor,
  label,
  placeholder,
}: InputProps) {
  const { register } = useFormContext();
  return (
    <div>
      <label className='font-bold inline-block mb-1' htmlFor={htmlFor}>
        {label}
      </label>
      <div>
        <ShareInput
          placeholder={placeholder}
          type='password'
          register={register('password')}
        />
      </div>
    </div>
  );
}
