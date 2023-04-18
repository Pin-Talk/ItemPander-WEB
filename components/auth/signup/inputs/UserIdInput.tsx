import { validateForm } from '@/utils/formValidation';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

export default function UserIdInput({
  htmlFor,
  label,
  placeholder,
}: InputProps) {
  const {
    register,
    setError,
    formState: { errors },
  } = useFormContext();

  const userIdErrorMessage = errors.userId?.message;

  return (
    <div>
      <div className='mb-1 flex items-center space-x-4'>
        <label className='inline-block font-bold'>{label}</label>
        {userIdErrorMessage && (
          <ErrorMessage message={userIdErrorMessage as string} />
        )}
      </div>
      <div className='flex'>
        <ShareInput
          maxLength={13}
          register={register('userId', {
            required: '아이디를 입력해주세요.',
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
