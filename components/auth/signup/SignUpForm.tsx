'use client';

import { useForm } from 'react-hook-form';
import AddressInput from './AddressInput';
import EmailInput from './EmailInput';
import Gender from './Gender';
import IdInput from './IdInput';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import PasswordInput from './PasswordInput';
import { SignUpFormData } from './types';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<SignUpFormData>();

  const onValidForm = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div className='lg:flex-1 max-w-2xl text-gray-100 overflow-hidden'>
      <form
        onSubmit={handleSubmit(onValidForm)}
        className='space-y-6 px-6 py-6 rounded-2xl shadow-lg'
      >
        <NameInput
          register={register('name', { required: '이름을 입력해주세요.' })}
          htmlFor='name'
          label='이름'
          placeholder='이름'
        />

        <div className='flex'>
          <label className='font-bold mr-6' htmlFor='gender '>
            성별
          </label>
          <div className='flex'>
            <Gender
              register={register('gender', {
                required: '성별을 입력해주세요.',
              })}
              watch={watch}
              htmlFor='gender'
            />
          </div>
        </div>

        <div>
          <IdInput
            placeholder='아이디'
            htmlFor='id'
            label='아이디'
            register={register}
          />
        </div>

        <div>
          <PasswordInput
            label='비밀번호'
            placeholder='비밀번호'
            register={register}
          />
        </div>

        <div>
          <label className='inline-block mb-1 font-bold' htmlFor='phone'>
            휴대폰
          </label>
          <div className='flex items-center space-x-4'>
            <p>010</p>
            <span>-</span>
            <NumberInput
              register={register('phone1', {
                required: '앞 번호를 입력해주세요.',
              })}
              placeholder='앞 번호'
              maxLength={4}
            />
            <span>-</span>
            <NumberInput
              register={register('phone2', {
                required: '뒷 번호를 입력해주세요.',
              })}
              placeholder='뒷 번호'
              maxLength={4}
            />
          </div>
        </div>

        <div>
          <label className='inline-block mb-1 font-bold' htmlFor='phone'>
            주민번호
          </label>
          <div className='flex items-center space-x-4'>
            <NumberInput
              register={register('ssn1', {
                required: '앞 주민번호를 입력해주세요.',
              })}
              placeholder='앞 번호'
              maxLength={6}
            />
            <span>-</span>
            <NumberInput
              register={register('ssn2', {
                required: '뒷 주민번호를 입력해주세요.',
              })}
              placeholder='뒷 번호'
              maxLength={7}
            />
          </div>
        </div>

        <EmailInput
          register={register}
          htmlFor='email'
          label='이메일'
          placeholder='이메일'
        />

        <AddressInput
          register={register}
          watch={watch}
          label='사는곳'
          setValue={setValue}
        />
        {errors.address1?.message && <span>{errors.address1.message}</span>}

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
