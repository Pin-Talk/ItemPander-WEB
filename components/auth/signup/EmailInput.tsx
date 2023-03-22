import { InputProps } from '@/model/interface/shareInput';
import { AiOutlineDown } from 'react-icons/ai';

const EmailInput = ({ htmlFor, label, placeholder }: InputProps) => {
  return (
    <div>
      <label className='inline-block mb-2 font-bold' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex'>
        <div className='flex items-center space-x-3'>
          <input
            className='p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 w-50'
            type='text'
            placeholder={placeholder}
          />
          <span>@</span>
          <div className='relative rounded-md border-2 border-gray-200'>
            <select className='py-1 pl-2 lg:p-2 bg-transparent border-gray-200 appearance-none outline-none w-28 cursor-pointer'>
              <option value=''>이메일</option>
              <option value='naver.com'>naver.com</option>
              <option value='daum.com'>daum.com</option>
              <option value='gmail.com'>gmail.com</option>
            </select>
            <div className='pointer-events-none absolute right-2 bottom-0 top-0 flex items-center justify-center text-gray-400'>
              <AiOutlineDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailInput;
