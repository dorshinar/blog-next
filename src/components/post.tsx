import { PostMeta } from "@/types/Post";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

interface Props {
  meta: PostMeta;
}

export function Post({ children, meta }: PropsWithChildren<Props>) {
  return (
    <article className="flex flex-col gap-6 w-full overflow-hidden px-4 sm:px-8 sm:max-w-3xl">
      <header className="flex flex-col">
        <h1 className="text-2xl text-emerald-500 font-medium">{meta.title}</h1>
        <small className="text-zinc-400 text-sm">
          {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
            meta.date
          )}
        </small>
      </header>
      {meta.cover && <Image src={meta.cover} alt="cover image" />}
      {children}
    </article>
  );
}
