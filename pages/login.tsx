import useWindowSize from '@/components/hooks/useWindowSize';
import LoginForm from '@/components/login/LoginForm';
import { NextPage } from 'next';
import Image from 'next/image';

const Login: NextPage = () => {
  const { desk, currentSize } = useWindowSize();
  return (
    <section className='flex justify-center items-center'>
      <div className='flex-1 min-h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-2'>
            <Image src={'/logo/logo.png'} alt='logo' width={120} height={120} />
          </div>
          <p className='font-bold text-2xl text-gray-700'>Item Pander</p>
        </div>
        <LoginForm />
      </div>

      {currentSize >= desk && (
        <div className='xl:flex-1 w-full min-h-screen relative'>
          <Image
            src='/images/login/login.jpg'
            alt='login'
            fill
            className='absolute object-cover'
          />
        </div>
      )}
    </section>
  );
};
export default Login;
