import { InputProps } from '@/model/interface/shareInput';

const NameInput = ({
  htmlFor,
  label,
  type = 'text',
  placeholder,
}: InputProps) => {
  return (
    <div className='flex items-center'>
      <label className='font-bold mr-6' htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className='p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 w-80'
        type='text'
        id={htmlFor}
        placeholder={placeholder}
      />
    </div>
  );
};
export default NameInput;
