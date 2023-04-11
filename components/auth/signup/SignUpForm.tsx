'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { SignUpFormData } from './types';

import AddressInput from './inputs/AddressInput';
import EmailInput from './inputs/EmailInput';
import Gender from './inputs/Gender';
import IdInput from './inputs/IdInput';
import NameInput from './inputs/NameInput';
import PasswordInput from './inputs/PasswordInput';
import PhoneInput from './inputs/PhoneInput';
import SSNInput from './inputs/SSNInput';

const SignUpForm = () => {
  const SignUpFormMethod = useForm<SignUpFormData>();

  const onValidForm = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div className='lg:flex-1 max-w-2xl text-gray-100 overflow-hidden'>
      <FormProvider {...SignUpFormMethod}>
        <form
          onSubmit={SignUpFormMethod.handleSubmit(onValidForm)}
          className='space-y-6 px-6 py-6 rounded-2xl shadow-lg'
        >
          <NameInput htmlFor='name' label='이름' placeholder='이름' />

          <div className='flex'>
            <span className='font-bold mr-6'>성별</span>
            <div className='flex'>
              <Gender />
            </div>
          </div>

          <IdInput placeholder='아이디' htmlFor='id' label='아이디' />

          <PasswordInput label='비밀번호' placeholder='비밀번호' />

          <PhoneInput />

          <SSNInput />

          <EmailInput htmlFor='email' label='이메일' placeholder='이메일' />

          <AddressInput label='사는곳' />

          <div className='flex justify-center items-center w-full'>
            <button className='p-3 px-10 rounded-lg text-white bg-blue-300 hover:bg-blue-500 font-bold transition-all w-full'>
              회원가입
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default SignUpForm;
