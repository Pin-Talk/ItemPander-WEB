import { UseFormRegister } from 'react-hook-form';
import ShareInput from './ShareInput';
import { SignUpFormData } from './types';

interface Props {
  register: UseFormRegister<SignUpFormData>;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
}

export default function PasswordInput({
  register,
  htmlFor,
  label,
  placeholder,
}: Props) {
  return (
    <div>
      <label className='font-bold inline-block mb-1' htmlFor={htmlFor}>
        {label}
      </label>
      <div>
        <ShareInput
          placeholder={placeholder}
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
        />
      </div>
    </div>
  );
}
