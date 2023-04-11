import { useFormContext } from 'react-hook-form';
import { InputProps } from '../types';
import ShareInput from './ShareInput';

export default function IdInput({ htmlFor, label, placeholder }: InputProps) {
  const { register } = useFormContext();
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor={htmlFor}>
        {label}
      </label>
      <div className='flex'>
        <ShareInput register={register('userId')} placeholder={placeholder} />
      </div>
    </div>
  );
}
