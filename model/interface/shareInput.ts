import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  htmlFor?: string;
  register?: UseFormRegisterReturn;
  maxLength?: number;
}
