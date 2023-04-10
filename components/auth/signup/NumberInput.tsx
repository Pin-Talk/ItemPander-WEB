import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';

interface Props {
  placeholder?: string;
  type?: string;
  maxLength?: number;
  name: string;
}

const NumberInput = ({
  placeholder,
  type = 'text',
  maxLength,
  name,
}: Props) => {
  const { register } = useFormContext();
  return (
    <ShareInput
      register={register(name)}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};
export default NumberInput;
