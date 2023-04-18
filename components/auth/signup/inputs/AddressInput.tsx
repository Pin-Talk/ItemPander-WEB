import useAddress from '@/components/hooks/useAddress';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';
import { InputProps } from '../types';
import ErrorMessage from '../../ErrorMessage';

const AddressInput = ({ label }: InputProps) => {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
    clearErrors,
  } = useFormContext();
  const { address, handleAddressPop } = useAddress();

  useEffect(() => {
    if (address) {
      setValue('address1', address);
    }
  }, [address]);

  useEffect(() => {
    if (address) {
      clearErrors('address1');
    }
  }, [watch, clearErrors, address]);

  const addressErrorMessage =
    errors.address1?.message || errors.address2?.message;

  return (
    <div>
      <div className='mb-1 flex items-center space-x-4'>
        <label className='inline-block font-bold'>{label}</label>
        {addressErrorMessage && (
          <ErrorMessage message={addressErrorMessage as string} />
        )}
      </div>
      <div className='flex flex-col space-y-2'>
        <div className='w-full relative'>
          <ShareInput
            register={register('address1', {
              ...(!address && { required: '도로명 주소를 입력해주세요.' }),
            })}
            className='w-full caret-transparent p-1 px-2 rounded-md bg-transparent border-2 border-gray-200 w-50  placeholder:text-gray-300 '
            placeholder='도로명 주소'
          />
          <div
            onClick={handleAddressPop}
            className='absolute w-full h-full top-0 bg-transparent cursor-pointer'
          />
        </div>

        <textarea
          {...register('address2', {
            required: '상세주소를 입력해주세요.',
          })}
          placeholder='상세주소'
          className='outline-none p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 w-50 placeholder:text-gray-300'
        />
      </div>
    </div>
  );
};
export default AddressInput;
