'use client';

import useAddress from '@/components/hooks/useAddress';
import { useEffect } from 'react';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import ShareInput from './ShareInput';
import { SignUpFormData } from './types';

interface Props {
  register: UseFormRegister<SignUpFormData>;
  label: string;
  watch: UseFormWatch<SignUpFormData>;
  setValue: UseFormSetValue<SignUpFormData>;
}

const AddressInput = ({ register, label, watch, setValue }: Props) => {
  const { address, handleAddressPop } = useAddress();

  useEffect(() => {
    if (address) {
      setValue('address1', address);
    }
  }, [address]);

  return (
    <div>
      <label className='inline-block mb-2 font-bold' htmlFor='address'>
        {label}
      </label>
      <div className='flex flex-col space-y-2'>
        <div className='w-full relative'>
          <ShareInput
            {...register('address1', {
              required: '주소를 입력해주세요.',
            })}
            className='w-full caret-transparent p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 w-50  placeholder:text-gray-300 '
            placeholder='통합주소'
          />
          <div
            onClick={handleAddressPop}
            className='absolute w-full h-full top-0 bg-transparent cursor-pointer'
          />
        </div>

        <textarea
          {...register('address2')}
          placeholder='상세주소'
          className='outline-none p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 w-50 placeholder:text-gray-300'
        />
      </div>
    </div>
  );
};
export default AddressInput;
