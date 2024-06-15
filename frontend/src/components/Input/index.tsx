import { forwardRef } from "react";

type Props = {
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, ...rest }: Props, ref) => {
  return (
    <input
      type='text'
      className='outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3 outline-none'
      placeholder={placeholder}
    />
  );
});
