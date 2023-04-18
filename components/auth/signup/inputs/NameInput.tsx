'use client';

import { validateForm } from '@/utils/formValidation';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

const NameInput = ({
  htmlFor,
  label,
  type = 'text',
  placeholder,
}: InputProps) => {
  const {
    register,
    setError,
    formState: { errors },
  } = useFormContext();

  const nameErrorMessage = errors.name?.message;
  return (
    <div className='flex items-center'>
      <label className='font-bold mr-6' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex items-center space-x-4'>
        <ShareInput
          register={register('name', {
            required: '이름을 입력해주세요.',
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
        {nameErrorMessage && (
          <ErrorMessage message={nameErrorMessage as string} />
        )}
      </div>
    </div>
  );
};
export default NameInput;
