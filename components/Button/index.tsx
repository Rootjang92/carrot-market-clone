import { cls } from "../../utils/cls";

type ButtonProps = {
  classNames: string[];
  onClick?: () => void;
  children: string;
} 

const Button = ({ onClick, children, classNames }: ButtonProps) => {
  <button className={cls(...classNames)} onClick={onClick}>{children}</button>
};

export default Button;