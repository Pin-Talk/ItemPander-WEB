import useWindowSize from '@/components/hooks/useWindowSize';
import LoginForm from '@/components/login/LoginForm';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Login: NextPage = () => {
  const { desk, currentSize } = useWindowSize();
  return (
    <section className='flex justify-center items-center'>
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

      <div className='flex-1 min-h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center mb-8'>
          <div className='mb-2'>
            <Image src={'/logo/logo.png'} alt='logo' width={120} height={120} />
          </div>
          <p className='font-bold text-2xl text-gray-700'>Item Pander</p>
        </div>
        <LoginForm />

        <div className='flex items-center space-x-2'>
          <p className='text-gray-400  text-sm'>계정이 없으신가요?</p>
          <Link href={'/signup'}>
            <span className='font-bold text-gray-700 hover:text-gray-900 cursor-pointer transition-all'>
              회원가입
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Login;
