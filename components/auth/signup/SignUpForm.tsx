import AddressInput from './AddressInput';
import EmailInput from './EmailInput';
import Gender from './Gender';
import NameInput from './NameInput';
import NumberInput from './NumberInput';

const SignUpForm = () => {
  return (
    <div className='lg:flex-1 max-w-2xl text-gray-100'>
      <form className='space-y-7 px-6 py-6 rounded-2xl shadow-lg'>
        <NameInput htmlFor='name' label='이름' placeholder='이름' />

        <div className='flex'>
          <label className='font-bold mr-6' htmlFor='gender '>
            성별
          </label>
          <div className='flex'>
            <Gender htmlFor='gender' title='남자' />
            <Gender htmlFor='gender' title='여자' />
          </div>
        </div>

        <div>
          <label className='inline-block mb-2 font-bold' htmlFor='phone'>
            휴대폰
          </label>
          <div className='flex items-center space-x-4'>
            <NumberInput placeholder='뒷 번호' maxLength={6} />
          </div>
        </div>

        <div>
          <label className='inline-block mb-2 font-bold' htmlFor='phone'>
            주민번호
          </label>
          <div className='flex items-center space-x-4'>
            <NumberInput placeholder='앞 번호' maxLength={6} />
            <NumberInput placeholder='뒷 번호' maxLength={7} />
          </div>
        </div>

        <EmailInput htmlFor='email' label='이메일' />

        <AddressInput label='사는곳' />

        <div className='flex justify-center items-center w-full'>
          <button className='p-3 px-10 rounded-lg text-white bg-blue-300 hover:bg-blue-500 font-bold transition-all w-full'>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
