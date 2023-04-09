import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <section className='min-h-screen px-4 relative flex items-center justify-center bg-auth-signup'>
      <div className='absolute w-full h-full bg-black opacity-80' />

      <div className='z-10 w-full flex flex-col justify-center items-center py-6'>
        <div className='lg:flex-1'>
          <p className='text-4xl lg:text-5xl font-bold text-left w-full mb-10 text-[#81A9FE]'>
            Item Pander 회원가입
          </p>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
};
export default SignUp;
