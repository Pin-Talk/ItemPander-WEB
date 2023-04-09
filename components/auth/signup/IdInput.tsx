import { UseFormRegister } from 'react-hook-form';
import ShareInput from './ShareInput';
import { SignUpFormData } from './types';

interface Props {
  register: UseFormRegister<SignUpFormData>;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
}

export default function IdInput({
  register,
  htmlFor,
  label,
  placeholder,
}: Props) {
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex'>
        <ShareInput
          placeholder={placeholder}
          {...register('id', { required: '아이디를 입력해주세요.' })}
        />
      </div>
    </div>
  );
}
