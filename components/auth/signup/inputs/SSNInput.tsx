import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';

const SSNInput = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor='phone'>
        주민번호
      </label>
      <div className='flex items-center space-x-4'>
        <ShareInput
          register={register('ssn1')}
          placeholder='앞 번호'
          maxLength={6}
        />
        <span>-</span>
        <ShareInput
          register={register('ssn2')}
          placeholder='뒷 번호'
          maxLength={7}
        />
      </div>
    </div>
  );
};
export default SSNInput;
