'use Client';

import Selector from '@/components/selector/Selector';
import { EmailSelectorContext } from '@/context/selectorContext';
import { emails } from '@/data/signupBoard';
import { validateForm } from '@/utils/formValidation';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

const EmailInput = ({ htmlFor, label, placeholder }: InputProps) => {
  const [emailValue, setEmailValue] = useState('이메일');
  const { isEmailActive, setIsEmailActive } = useContext(EmailSelectorContext);

  const {
    register,
    setValue,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue('email2', emailValue);
  }, [setValue, emailValue]);

  useEffect(() => {
    if (watch('email2') === '이메일') {
      setError('email2', { message: '이메일 주소를 입력해주세요.' });
    } else {
      clearErrors('email2');
    }
  }, [emailValue]);

  const emailErrorMessage = errors.email2?.message;

  return (
    <div>
      <div className='mb-1 flex items-center space-x-4'>
        <label className='inline-block font-bold' htmlFor={htmlFor}>
          {label}
        </label>
        {emailErrorMessage && (
          <ErrorMessage message={emailErrorMessage as string} />
        )}
      </div>
      <div className='flex'>
        <div className='flex items-center space-x-3'>
          <ShareInput
            type='text'
            placeholder={placeholder}
            maxLength={16}
            register={register('email1', {
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                const message = validateForm.validEnglishWithNumber(e);
                if (message) {
                  return setError('email1', { message });
                }
              },
            })}
          />
          <span>@</span>
          <Selector
            boardItems={emails}
            setValue={setEmailValue}
            value={emailValue}
            width='w-44'
            isActive={isEmailActive}
            setIsActive={setIsEmailActive}
          />
        </div>
      </div>
    </div>
  );
};
export default EmailInput;
