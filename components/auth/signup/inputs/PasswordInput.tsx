'use client';

import { validateForm } from '@/utils/formValidation';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

export default function PasswordInput({
  htmlFor,
  label,
  placeholder,
}: InputProps) {
  const {
    register,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext();

  const passwordErrorMessage = errors.password?.message;
  return (
    <div>
      <div className='mb-1 flex items-center space-x-4'>
        <label className='inline-block font-bold'>{label}</label>
        {passwordErrorMessage && (
          <ErrorMessage message={passwordErrorMessage as string} />
        )}
      </div>
      <div>
        <ShareInput
          maxLength={18}
          placeholder={placeholder}
          type='password'
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '8자리 이상 입력해주세요.',
            },
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              const message = validateForm.validSpecialStringWithLength(e);
              if (message) {
                setError('password', { message });
              } else {
                clearErrors('password');
              }
            },
          })}
        />
      </div>
    </div>
  );
}
