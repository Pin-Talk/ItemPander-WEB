import Image from 'next/image';
import AddressInput from './AddressInput';
import EmailInput from './EmailInput';
import Gender from './Gender';
import NameInput from './NameInput';
import NumberInput from './NumberInput';

const SignUp = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100'>
      <div className='lg:flex-1 w-full'>
        <p className='text-3xl font-bold text-left w-full mb-10 text-[#81A9FE]'>
          Item Pander 회원가입
        </p>
        {/* <Image src={'/logo/logo.png'} alt='logo' width={120} height={120} />
        <h1>Item Pander</h1>
         */}
      </div>

      <div className='lg:flex-1 w-full'>
        <form className='space-y-7 px-6 py-6 rounded-2xl bg-white shadow-lg'>
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

          <div className='flex justify-center items-center'>
            <button className='p-3 px-10 rounded-lg text-white bg-blue-300 hover:bg-blue-400 font-bold transition-all'>
              회원가입
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default SignUp;
