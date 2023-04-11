import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';

const PhoneInput = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor='phone'>
        휴대폰
      </label>
      <div className='flex items-center space-x-4'>
        <p>010</p>
        <span>-</span>
        <ShareInput
          placeholder='앞 번호'
          maxLength={4}
          register={register('phone1')}
        />
        <span>-</span>
        <ShareInput
          register={register('phone2')}
          placeholder='뒷 번호'
          maxLength={4}
        />
      </div>
    </div>
  );
};
export default PhoneInput;
