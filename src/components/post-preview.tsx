import { PostMeta } from "@/types/Post";
import Link from "next/link";

interface Props {
  post: PostMeta;
}

export function PostPreview({ post }: Props) {
  return (
    <article key={post.slug} className="rounded-lg overflow-hidden w-full">
      <h2 className="text-zinc-200 text-2xl font-medium">
        <Link href={`posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <span className="text-zinc-400 text-sm">
        {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
          post.date
        )}
      </span>
      <p className="text-zinc-400">{post.description}</p>
    </article>
  );
}
