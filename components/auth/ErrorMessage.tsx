import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface Props {
  message?: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <div>
      <p className='font-bold text-red-300'>{message}</p>
    </div>
  );
};
export default ErrorMessage;
