'use Client';

import Selector from '@/components/selector/Selector';
import { EmailSelectorContext } from '@/context/selectorContext';
import { emails } from '@/data/signupBoard';
import { useContext, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

const EmailInput = ({ htmlFor, label, placeholder }: InputProps) => {
  const [emailValue, setEmailValue] = useState('이메일');
  const { isEmailActive, setIsEmailActive } = useContext(EmailSelectorContext);

  const { register, setValue } = useFormContext();

  useEffect(() => {
    setValue('email2', emailValue);
  }, [setValue, emailValue]);

  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex'>
        <div className='flex items-center space-x-3'>
          <ShareInput
            type='text'
            placeholder={placeholder}
            register={register('email1')}
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
