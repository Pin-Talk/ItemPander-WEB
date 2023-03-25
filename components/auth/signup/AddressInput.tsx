import useAddress from '@/components/hooks/useAddress';
import { InputProps } from '@/model/interface/shareInput';

const AddressInput = ({ register, label }: InputProps) => {
  const { address, handleAddressPop } = useAddress();
  console.log(address);
  return (
    <div>
      <label className='inline-block mb-2 font-bold' htmlFor='address'>
        {label}
      </label>
      <div className='flex flex-col space-y-2'>
        <input
          onClick={handleAddressPop}
          className='caret-white p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 w-50 cursor-pointer placeholder:text-gray-300'
          type='text'
          placeholder='통합 주소'
          value={address}
        />
        <textarea
          placeholder='상세주소'
          className='outline-none p-1 px-2 lg:p-2 rounded-md bg-transparent border-2 border-gray-200 w-50 placeholder:text-gray-300'
        />
      </div>
    </div>
  );
};
export default AddressInput;
