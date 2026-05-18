import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(className)} {...props} />;
}

export default Button;
