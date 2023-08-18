import Image from "next/image";
import Link from "next/link";
import profilePic from "./profile-pic.jpg";
import { GithubIcon, TwitterIcon } from "lucide-react";

import { meta as linting } from "./posts/linting-your-react-typescript-project-with-eslint-and-prettier/post.mdx";
import { meta as jestSnapshots } from "./posts/why-i-stopped-writing-jest-snapshot-tests/page.mdx";
import { meta as buildingABlog } from "./posts/building-a-personal-blog/page.mdx";
import { PostSchema } from "@/types/Post";
import { z } from "zod";

const PostsSchema = z.array(PostSchema);

export default function Home() {
  const posts = PostsSchema.parse([linting, jestSnapshots, buildingABlog]).sort(
    (first, second) => (first.date > second.date ? -1 : 1)
  );

  return (
    <>
      <section className="flex flex-col items-center">
        <Image
          src={profilePic}
          alt="The author"
          width={200}
          height={200}
          className="rounded-[100%]"
          priority
        ></Image>

        <p>
          I&apos;m <strong>Dor Shinar</strong>. I am a Software Engineer, who
          also likes to write articles. This is my blog!
        </p>

        <address className="flex w-full flex-row justify-start">
          <Link href={`https://github.com/dorshinar`} aria-label={"Github"}>
            <GithubIcon />
          </Link>
          <Link href={`https://twitter.com/DorShinar`} aria-label={"Twitter"}>
            <TwitterIcon />
          </Link>
        </address>
      </section>

      <section>
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
