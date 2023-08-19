import clsx from "clsx";
import type { MDXComponents } from "mdx/types";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    pre: (props) => (
      <pre
        {...props}
        className={clsx(props.className, "w-full overflow-hidden rounded")}
      />
    ),
    a: (props) => (
      <a
        {...props}
        className={clsx(props.className, "text-emerald-500 underline")}
      />
    ),
    // code: (props) => (
    //   <code {...props} className={clsx(props.className, "bg-[#0d1117] p-px")} />
    // ),
    h2: (props) => (
      <h2 {...props} className={clsx(props.className, "text-lg font-bold")} />
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className={clsx(props.className, "border-l-8 p-4 border-zinc-500")}
      />
    ),
  };
}
