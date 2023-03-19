import LoginInputContainer from './LoginInputContainer';

const LoginForm = () => {
  return (
    <form className='w-96 h-96 flex flex-col items-center justify-center p-10'>
      <LoginInputContainer placeholder='아이디' htmlFor='id' label='아이디' />

      <LoginInputContainer
        placeholder='비밀번호'
        htmlFor='password'
        label='비밀번호'
        type='password'
      />

      <button className='mt-8 w-full bg-gray-900 py-1 px-2 rounded-md text-white text-lg hover:bg-gray-700 cursor-pointer transition-all'>
        로그인
      </button>
    </form>
  );
};
export default LoginForm;
