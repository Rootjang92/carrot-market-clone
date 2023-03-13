import { ChangeEvent } from "react";

import { cls } from "utils/cls";

type ButtonProps = {
  id?: string;
  classNames: string[];
  placeholder?: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Button = ({
  id,
  classNames,
  placeholder,
  type = "text",
  onChange,
  required,
}: ButtonProps) => {
  return (
    <input
      id={id}
      className={cls(...classNames)}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      required={required}
    />
  );
};

export default Button;
