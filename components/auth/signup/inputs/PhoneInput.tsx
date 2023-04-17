'use client';

import { useContext, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';
import Selector from '@/components/selector/Selector';
import { phoneNumbers } from '@/data/signupBoard';
import { PhoneSelectorContext } from '@/context/selectorContext';

const PhoneInput = () => {
  const [phoneValue, setPhoneValue] = useState('010');
  const { isPhoneActive, setIsPhoneActive } = useContext(PhoneSelectorContext);
  const { register, setValue } = useFormContext();

  useEffect(() => {
    setValue('phone1', phoneValue);
  }, [setValue, phoneValue]);

  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor='phone'>
        휴대폰
      </label>
      <div className='flex items-center space-x-4'>
        <Selector
          boardItems={phoneNumbers}
          value={phoneValue}
          setValue={setPhoneValue}
          width='w-48'
          height='h-28'
          isActive={isPhoneActive}
          setIsActive={setIsPhoneActive}
        />
        <span>-</span>
        <ShareInput
          placeholder='앞 번호'
          maxLength={4}
          register={register('phone2', { required: '앞 번호를 입력해주세요.' })}
        />
        <span>-</span>
        <ShareInput
          register={register('phone3', { required: '뒷 번호를 입력해주세요.' })}
          placeholder='뒷 번호'
          maxLength={4}
        />
      </div>
    </div>
  );
};
export default PhoneInput;
