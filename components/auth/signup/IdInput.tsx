import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';
import { InputProps, SignUpFormData } from './types';

export default function IdInput({ htmlFor, label, placeholder }: InputProps) {
  const { register } = useFormContext();
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex'>
        <ShareInput register={register('id')} placeholder={placeholder} />
      </div>
    </div>
  );
}
