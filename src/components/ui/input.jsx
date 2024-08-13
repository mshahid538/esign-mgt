"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function Input({ type, label, onChange, disabled, value, placeholder, className }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  if (type === "password")
    return (
      <div className={`${className} relative`}>
        <label className="text-xs">{label || placeholder}</label>
        <input
          type={show ? "text" : "password"}
          disabled={disabled}
          className="accent-primary mt-1 rounded text-sm p-3 border border-dark/25"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        {show ? (
          <EyeOffIcon
            className="icon text-dark/50 hover:text-dark cursor-pointer absolute top-10 right-3"
            onClick={toggleShow}
          />
        ) : (
          <EyeIcon
            className="icon text-dark/50 hover:text-dark cursor-pointer absolute top-10 right-3"
            onClick={toggleShow}
          />
        )}
      </div>
    );

  return (
    <div className={`${className} `}>
      <label className="text-xs">{label || placeholder}</label>
      <input
        type={type}
        disabled={disabled}
        className="accent-primary mt-1 rounded text-sm p-3 border border-dark/25"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
