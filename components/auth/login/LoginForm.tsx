import { useForm } from 'react-hook-form';
import LoginInputContainer from './LoginInputContainer';

interface Form {
  id: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Form>();

  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-96 h-80 flex flex-col items-center justify-center p-10'
    >
      <LoginInputContainer
        register={register('id', {
          required: '아이디를 입력해주세요.',
        })}
        placeholder='아이디'
        htmlFor='id'
        label='아이디'
        maxLength={13}
      />

      <LoginInputContainer
        register={register('password', {
          required: '비밀번호를 입력해주세요.',
        })}
        placeholder='비밀번호'
        htmlFor='password'
        label='비밀번호'
        type='password'
        maxLength={16}
      />

      <button className='mt-8 w-full bg-gray-900 py-1 px-2 rounded-md text-white text-lg hover:bg-gray-700 cursor-pointer transition-all'>
        로그인
      </button>
    </form>
  );
};
export default LoginForm;
