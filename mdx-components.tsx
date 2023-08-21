import { Message } from "@/components/message";
import clsx from "clsx";
import { LinkIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => (
      <pre
        {...props}
        className={clsx(props.className, "w-full overflow-hidden sm:rounded")}
      />
    ),
    a: (props) => (
      <a
        {...props}
        className={clsx(props.className, "text-emerald-500 underline")}
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className={clsx(
          props.className,
          "text-lg font-bold group flex gap-2 items-center"
        )}
      >
        {props.children}
        <a
          href={`#${props.id}`}
          aria-hidden
          className="sr-only group-hover:not-sr-only group-focus-within:no-sr-only"
        >
          <LinkIcon size={18} />
        </a>
      </h2>
    ),
    h3: (props) => (
      <h2
        {...props}
        className={clsx(
          props.className,
          "text-lg font-medium group flex gap-2 items-center"
        )}
      >
        {props.children}
        <a
          href={`#${props.id}`}
          aria-hidden
          className="sr-only group-hover:not-sr-only group-focus-within:no-sr-only"
        >
          <LinkIcon size={18} />
        </a>
      </h2>
    ),
    blockquote: Message,
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
