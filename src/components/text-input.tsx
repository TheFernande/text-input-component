"use client";

import IconMail from "./icons/icon-mail";
import IconQuestion from "./icons/icon-question";

import "../styles/input.css";
import React from "react";

export interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  withIconLeft?: boolean;
  isDisabled?: boolean;
  isValid?: boolean;
}

const label = "Email";
const placeholder = "name@email.com";
const hint = "This is a hint text";
const errorMessage = "This is an error message.";

export default function TextInput({
  withIconLeft = false,
  isDisabled = false,
  isValid = true,
  ...props
}: Readonly<ITextInputProps>) {
  return (
    <div className='flex flex-col gap-[6px]'>
      <label className='text-sm font-medium text-neutral-700'>{label}</label>
      <div
        aria-label={label}
        tabIndex={0}
        className={
          isDisabled
            ? "inputDisabled"
            : "inputEnabled" +
              " " +
              "focus:shadow-[0_0px_0px_1px_rgba(68,76,231,100),0_1px_2px_0px_rgba(16,24,40,0.5),0_0px_0px_4px_rgba(68,76,231,0.12)] focus:outline focus:outline-[#444CE7]"
        }
      >
        {withIconLeft && (
          <i className='mr-2 mt-1 text-neutral-400'>
            <IconMail />
          </i>
        )}
        <input
          tabIndex={-1}
          type='email'
          autoComplete='email'
          placeholder={placeholder}
          disabled={isDisabled}
          className='w-full border-none bg-transparent text-neutral-900 placeholder:text-sm placeholder:text-neutral-500 disabled:cursor-not-allowed placeholder:disabled:text-neutral-400'
          value={props.value ? props.value : ""}
          {...props}
        />
        <i className={isValid ? "text-neutral-400" : "text-red-500"}>
          <IconQuestion />
        </i>
      </div>
      {isValid ? (
        <p className='text-sm font-normal text-neutral-500'>{hint}</p>
      ) : (
        <p className='text-sm font-normal text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
}
