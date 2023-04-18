'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { SignUpFormData } from './types';

import AddressInput from './inputs/AddressInput';
import EmailInput from './inputs/EmailInput';
import Gender from './inputs/Gender';
import UserIdInput from './inputs/UserIdInput';
import NameInput from './inputs/NameInput';
import PasswordInput from './inputs/PasswordInput';
import PhoneInput from './inputs/PhoneInput';
import SSNInput from './inputs/SSNInput';
import { PhoneSelectorProvider } from '@/context/selectorContext';
import ErrorMessage from '../ErrorMessage';
import { cls } from '@/utils/cls';
import Privacy from './inputs/Privacy';

const SignUpForm = () => {
  const signUpFormMethod = useForm<SignUpFormData>();

  const onValidForm = (data: SignUpFormData) => {
    console.log(data);
  };

  const { errors } = signUpFormMethod.formState;

  const genderErrorMessage = errors.gender?.message;
  const privacyErrorMessage = errors.privacyYn?.message;

  return (
    <PhoneSelectorProvider>
      <div className='lg:flex-1 max-w-2xl text-gray-100 overflow-hidden'>
        <FormProvider {...signUpFormMethod}>
          <form
            onSubmit={signUpFormMethod.handleSubmit(onValidForm)}
            className='space-y-5 px-6 py-6 rounded-2xl shadow-lg'
          >
            <NameInput htmlFor='name' label='이름' placeholder='이름' />

            <div className='flex'>
              <span className='font-bold mr-6'>성별</span>
              <div className='flex space-x-4'>
                <Gender />
                {genderErrorMessage && (
                  <ErrorMessage message={genderErrorMessage} />
                )}
              </div>
            </div>

            <UserIdInput placeholder='아이디' htmlFor='id' label='아이디' />

            <PasswordInput label='비밀번호' placeholder='비밀번호' />

            <PhoneInput />

            <SSNInput />

            <EmailInput htmlFor='email' label='이메일' placeholder='이메일' />

            <AddressInput label='사는곳' />

            <div className='flex'>
              <span className='font-bold mr-6'>개인정보</span>
              <div className='flex space-x-4'>
                <Privacy />
                {privacyErrorMessage && (
                  <ErrorMessage message={privacyErrorMessage} />
                )}
              </div>
            </div>

            <div className='flex justify-center items-center w-full'>
              <button className='p-3 px-10 rounded-lg text-white  font-bold transition-all w-full bg-sky-400 opacity-60 hover:bg-sky-500 hover:opacity-100'>
                회원가입
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </PhoneSelectorProvider>
  );
};
export default SignUpForm;
