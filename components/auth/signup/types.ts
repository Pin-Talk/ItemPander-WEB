import {
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormUnregister,
} from 'react-hook-form';

export interface SignUpFormData {
  name: string;
  gender: string;
  phone1: string;
  phone2: string;
  ssn1: string;
  ssn2: string;
  address1: string;
  address2: string;
  email1: string;
  email2: string;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  htmlFor?: string;
  register?: UseFormRegisterReturn;
  maxLength?: number;
}
