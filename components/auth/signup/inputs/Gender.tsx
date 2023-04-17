import { useFormContext } from 'react-hook-form';

const Gender = () => {
  const { register, watch } = useFormContext();
  const checkedMan = watch('gender') === 'M';
  const checkedWomen = watch('gender') === 'W';
  return (
    <div className='flex space-x-4'>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <input
          {...register('gender', {
            required: '성별을 선택해주세요.',
          })}
          className='border-2 border-gray-100 w-5 h-5 rounded-full'
          type='radio'
          id='gender-m'
          value='M'
          checked={checkedMan}
        />
        <label
          htmlFor='gender-m'
          className='inline-block text-sm text-gray-300'
        >
          남
        </label>
      </div>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <input
          {...register('gender', {
            required: '성별을 선택해주세요.',
          })}
          className='border-2 border-gray-100 w-5 h-5 rounded-full'
          type='radio'
          id='gender-w'
          value='W'
          checked={checkedWomen}
        />
        <label
          htmlFor='gender-w'
          className='inline-block text-sm text-gray-300'
        >
          여
        </label>
      </div>
    </div>
  );
};
export default Gender;
