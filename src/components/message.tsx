import clsx from "clsx";
import { HTMLAttributes } from "react";

export function Message({
  children,
  className,
}: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={clsx(
        className,
        "bg-sky-900 border-l-8 border-sky-500 rounded p-4"
      )}
    >
      {children}
    </blockquote>
  );
}
