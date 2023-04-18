import { validateForm } from '@/utils/formValidation';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';
import ShareInput from './ShareInput';

const SSNInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const SSNErrorMessage = errors.ssn1?.message || errors.ssn2?.message;
  return (
    <div>
      <div className='mb-1 flex items-center space-x-4'>
        <label className='inline-block font-bold'>주민번호</label>
        {SSNErrorMessage && (
          <ErrorMessage message={SSNErrorMessage as string} />
        )}
      </div>
      <div className='flex items-center space-x-4'>
        <ShareInput
          register={register('ssn1', {
            required: '앞 번호를 입력해주세요.',
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              validateForm.validNumber(e),
          })}
          placeholder='앞 번호'
          maxLength={6}
        />
        <span>-</span>
        <ShareInput
          register={register('ssn2', {
            required: '뒷 번호를 입력해주세요.',
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              validateForm.validNumber(e),
          })}
          placeholder='뒷 번호'
          maxLength={7}
        />
      </div>
    </div>
  );
};
export default SSNInput;
