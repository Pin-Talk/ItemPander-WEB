interface Props {
  label?: string;
  type?: string;
  htmlFor?: string;
  placeholder: string;
}

const LoginInputContainer = ({
  htmlFor,
  label,
  type = 'text',
  placeholder,
}: Props) => {
  return (
    <div className='flex flex-col mb-5 last:mb-0 space-y-1 w-full focus:border-black'>
      <label className='font-bold text-lg' htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className='border-2 placeholder:pl-2 pl-2  py-1 rounded-md'
        type={type}
        id={htmlFor}
        placeholder={placeholder}
      />
    </div>
  );
};
export default LoginInputContainer;
