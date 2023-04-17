'use client';

import { validateForm } from '@/utils/formValidation';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

export default function PasswordInput({
  htmlFor,
  label,
  placeholder,
}: InputProps) {
  const { register, setError } = useFormContext();
  return (
    <div>
      <label className='font-bold inline-block mb-1' htmlFor={htmlFor}>
        {label}
      </label>
      <div>
        <ShareInput
          maxLength={18}
          placeholder={placeholder}
          type='password'
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              validateForm.notBlank(e),
            validate: (value: string) => {
              const regex = /[ `~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
              return regex.test(value) || '특수문자를 포함해야합니다.';
            },
          })}
        />
      </div>
    </div>
  );
}
