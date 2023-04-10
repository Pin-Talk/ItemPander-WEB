'use client';

import { useForm, FormProvider } from 'react-hook-form';
import AddressInput from './AddressInput';
import EmailInput from './EmailInput';
import Gender from './Gender';
import IdInput from './IdInput';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import PasswordInput from './PasswordInput';
import { SignUpFormData } from './types';

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

          <div>
            <IdInput placeholder='아이디' htmlFor='id' label='아이디' />
          </div>

          <div>
            <PasswordInput label='비밀번호' placeholder='비밀번호' />
          </div>

          <div>
            <label className='inline-block mb-1 font-bold' htmlFor='phone'>
              휴대폰
            </label>
            <div className='flex items-center space-x-4'>
              <p>010</p>
              <span>-</span>
              <NumberInput name='phone1' placeholder='앞 번호' maxLength={4} />
              <span>-</span>
              <NumberInput name='phone2' placeholder='뒷 번호' maxLength={4} />
            </div>
          </div>

          <div>
            <label className='inline-block mb-1 font-bold' htmlFor='phone'>
              주민번호
            </label>
            <div className='flex items-center space-x-4'>
              <NumberInput name='ssn1' placeholder='앞 번호' maxLength={6} />
              <span>-</span>
              <NumberInput name='ssn2' placeholder='뒷 번호' maxLength={7} />
            </div>
          </div>

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
