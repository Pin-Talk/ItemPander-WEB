import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  label?: string;
  type?: string;
  htmlFor?: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  maxLength: number;
}

const LoginInputContainer = ({
  htmlFor,
  label,
  type = 'text',
  placeholder,
  register,
  maxLength,
}: Props) => {
  return (
    <div className='flex flex-col mb-5 last:mb-0 space-y-1 w-full focus:border-black'>
      <label className='font-bold text-lg' htmlFor={htmlFor}>
        {label}
      </label>
      <input
        {...register}
        className='border-2 placeholder:pl-2 pl-2  py-1 rounded-md focus:border-black'
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};
export default LoginInputContainer;
