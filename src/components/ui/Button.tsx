import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { clsx } from "clsx";

interface ButtonProps {
  path?: string;
  children: ReactNode;
  className?: string;
  click?: () => void;
}

const baseClass = "px-6 py-4 hover:bg-slate-100 duration-300 rounded-lg";

const Button: FC<ButtonProps> = ({ path, children, className, click }) => {
  const combinedClass = clsx(baseClass, className);

  if (click) {
    return (
      <button onClick={click} className={combinedClass}>
        {children}
      </button>
    );
  }

  if (path) {
    return (
      <Link href={path} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return <button className={combinedClass}>{children}</button>;
};

export default Button;
