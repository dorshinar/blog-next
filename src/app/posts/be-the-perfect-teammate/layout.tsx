import { Post } from "@/components/post";
import { PropsWithChildren } from "react";
import { meta } from "./page.mdx";
import { PostSchema } from "@/types/Post";

export default function PostLayout({ children }: PropsWithChildren) {
  return <Post meta={PostSchema.parse(meta)}>{children}</Post>;
}
