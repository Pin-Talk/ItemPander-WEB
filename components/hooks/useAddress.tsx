import { useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';

const useAddress = () => {
  const open = useDaumPostcodePopup();
  const [address, setAddress] = useState<Address>();

  const handleComplete = (data: Address) => {
    setAddress(data);
  };

  const handleAddressPop = () => {
    open({ onComplete: handleComplete });
  };

  return {
    address: address?.address,
    handleAddressPop,
  };
};
export default useAddress;
