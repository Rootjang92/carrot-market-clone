import { ReactNode } from "react";

import { cls } from "utils/cls";

type ButtonProps = {
  classNames: string[];
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children, classNames }: ButtonProps) => {
  return (
    <button
      className={cls(...classNames)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
