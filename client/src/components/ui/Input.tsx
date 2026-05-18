import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ className, type = "text", ...props }: InputProps) {
  return <input type={type} className={cn(className)} {...props} />;
}

export default Input;
