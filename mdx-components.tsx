import clsx from "clsx";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
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
    h2: (props) => (
      <h2 {...props} className={clsx(props.className, "text-lg font-bold")} />
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className={clsx(props.className, "border-l-8 p-4 border-zinc-500")}
      />
    ),
    ol: (props) => (
      <ol
        {...props}
        className={clsx(
          props.className,
          "list-decimal px-4 flex flex-col gap-2"
        )}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        className={clsx(props.className, "list-disc px-4 flex flex-col gap-2")}
      />
    ),
  };
}
