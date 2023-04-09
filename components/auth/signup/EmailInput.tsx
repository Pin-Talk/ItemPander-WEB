import { UseFormRegister } from 'react-hook-form';
import { AiOutlineDown } from 'react-icons/ai';
import ShareInput from './ShareInput';
import { SignUpFormData } from './types';

interface Props {
  register: UseFormRegister<SignUpFormData>;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
}

const EmailInput = ({ htmlFor, label, placeholder, register }: Props) => {
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex'>
        <div className='flex items-center space-x-3'>
          <ShareInput
            {...register('email1', {
              required: '이메일을 입력해주세요.',
            })}
            type='text'
            placeholder={placeholder}
          />
          <span>@</span>
          <div className='relative rounded-md border-2 border-gray-200'>
            <select
              {...register('email2', {
                required: '선택해주세요',
              })}
              className='py-1 pl-2 bg-transparent border-gray-200 appearance-none outline-none w-28 cursor-pointer'
            >
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
