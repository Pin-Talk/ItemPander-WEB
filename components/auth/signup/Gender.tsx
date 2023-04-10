import { useFormContext } from 'react-hook-form';

interface Props {
  htmlFor?: string;
}

const Gender = ({ htmlFor }: Props) => {
  const { register, watch } = useFormContext();
  const checkedMan = watch('gender') === 'M';
  const checkedWomen = watch('gender') === 'W';
  return (
    <div className='flex space-x-4'>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <input
          {...register('gender')}
          className='border-2 border-gray-100 w-5 h-5 rounded-full'
          type='radio'
          id={htmlFor}
          value='M'
          checked={checkedMan}
        />
        <span className='inline-block text-sm text-gray-300'>남</span>
      </div>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <input
          {...register('gender')}
          className='border-2 border-gray-100 w-5 h-5 rounded-full'
          type='radio'
          id={htmlFor}
          value='W'
          checked={checkedWomen}
        />
        <span className='inline-block text-sm text-gray-300'>여</span>
      </div>
    </div>
  );
};
export default Gender;
