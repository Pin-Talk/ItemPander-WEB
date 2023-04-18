import { useFormContext } from 'react-hook-form';

const Privacy = () => {
  const { register, watch } = useFormContext();
  const checkedMan = watch('privacy') === 'Y';
  const checkedWomen = watch('privacy') === 'N';
  return (
    <div className='flex space-x-4'>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <input
          {...register('privacy', {
            required: '성별을 선택해주세요.',
          })}
          className='border-2 border-gray-100 w-5 h-5 rounded-full'
          type='radio'
          id='privacy-Y'
          value='Y'
          checked={checkedMan}
        />
        <label
          htmlFor='privacy-Y'
          className='inline-block text-sm text-gray-300'
        >
          네
        </label>
      </div>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <input
          {...register('privacy', {
            required: '성별을 선택해주세요.',
          })}
          className='border-2 border-gray-100 w-5 h-5 rounded-full'
          type='radio'
          id='privacy-N'
          value='N'
          checked={checkedWomen}
        />
        <label
          htmlFor='privacy-N'
          className='inline-block text-sm text-gray-300'
        >
          아니오
        </label>
      </div>
    </div>
  );
};
export default Privacy;
