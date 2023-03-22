import { InputProps } from '@/model/interface/shareInput';

interface Props extends InputProps {
  title?: string;
}

const Gender = ({ htmlFor, title }: Props) => {
  return (
    <div className='flex flex-col justify-center w-10 pr-1'>
      <input
        className='border-2 border-gray-200 w-5 h-5 rounded-full'
        type='button'
        id={htmlFor}
      />
      <span className='text-sm text-gray-600'>{title}</span>
    </div>
  );
};
export default Gender;
