import { ChangeEvent } from "react";

import { cls } from "utils/cls";

type ButtonProps = {
  classNames: string[];
  placeholder?: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
};

const Button = ({
  classNames,
  placeholder,
  type = "text",
  onChange,
  required = false,
}: ButtonProps) => {
  return (
    <input
      className={cls(...classNames)}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      required={required}
    />
  );
};

export default Button;
