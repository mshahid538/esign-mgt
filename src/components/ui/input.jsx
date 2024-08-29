"use client";

import { EyeIcon, EyeOffIcon, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const Input = ({ type, label, onChange, disabled, value, placeholder, className }) => {
  return (
    <div className={`${className} `}>
      <label className="text-xs">{label || placeholder}</label>
      <input
        type={type || "text"}
        disabled={disabled}
        className="mt-1 rounded border border-dark/25 p-3 text-sm accent-primary"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export const Number = ({
  label,
  onChange,
  disabled,
  min,
  max,
  increment,
  decrement,
  value,
  placeholder,
  className,
}) => {
  return (
    <div className={`${className} relative`}>
      <label className="text-xs">{label || placeholder}</label>
      <input
        type="number"
        disabled={disabled}
        className="mt-1 rounded border border-dark/25 px-10 py-3 text-center text-sm accent-primary"
        onChange={onChange}
        value={value}
        min={min || 0}
        max={max || 100}
        placeholder={placeholder}
      />
      <PlusCircleIcon
        onClick={increment}
        className={`${
          label || placeholder ? "top-[42px]" : "top-[18px]"
        } icon absolute right-3 cursor-pointer bg-transparent transition-all hover:scale-105 text-dark/50 hover:text-dark`}
      />
      <MinusCircleIcon
        onClick={decrement}
        className={`${
          label || placeholder ? "top-[42px]" : "top-[18px]"
        } icon absolute left-3 cursor-pointer bg-transparent transition-all hover:scale-105 text-dark/50 hover:text-dark`}
      />
    </div>
  );
};

export const Password = ({ label, onChange, disabled, value, placeholder, className }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={`${className} relative`}>
      <label className="text-xs">{label || placeholder}</label>
      <input
        type={show ? "text" : "password"}
        disabled={disabled}
        className="mt-1 rounded border border-dark/25 p-3 text-sm accent-primary"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {show ? (
        <EyeOffIcon
          className="icon absolute right-3 top-10 cursor-pointer text-dark/50 transition-all hover:scale-105 hover:text-dark"
          onClick={toggleShow}
        />
      ) : (
        <EyeIcon
          className="icon absolute right-3 top-10 cursor-pointer text-dark/50 transition-all hover:scale-105 hover:text-dark"
          onClick={toggleShow}
        />
      )}
    </div>
  );
};

export const Select = ({ type, label, onChange, disabled, value, placeholder, className, children }) => {
  return (
    <div className={`${className} `}>
      <label className="text-xs">{label || placeholder}</label>
      <select
        type={type}
        disabled={disabled}
        className="mt-1 h-[46px] cursor-pointer rounded border border-dark/25 p-3 text-sm accent-primary"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      >
        {children}
      </select>
    </div>
  );
};

export const CheckboxBtn = ({ onChange, disabled, checked, className, icon }) => {
  const id = uuid();

  return (
    <div className={`${className} relative overflow-hidden rounded h-8 w-8`}>
      <label
        htmlFor={id}
        className={`${
          checked ? "bg-primary text-light" : "bg-dark/10"
        } absolute left-0 top-0 flex h-full w-full transition-colors items-center justify-center p-1.5`}
      >
        {icon}
      </label>
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        className="relative h-full w-full cursor-pointer opacity-0"
      />
    </div>
  );
};
