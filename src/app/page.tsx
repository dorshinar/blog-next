import Image from "next/image";
import Link from "next/link";
import profilePic from "./profile-pic.jpg";
import { GithubIcon, TwitterIcon } from "lucide-react";

import { meta as linting } from "./posts/linting-your-react-typescript-project-with-eslint-and-prettier/page.mdx";
import lintingCover from "./posts/linting-your-react-typescript-project-with-eslint-and-prettier/cover.png";
import { meta as jestSnapshots } from "./posts/why-i-stopped-writing-jest-snapshot-tests/page.mdx";
import { meta as buildingABlog } from "./posts/building-a-personal-blog/page.mdx";
import blogCover from "./posts/building-a-personal-blog/cover.png";
import { meta as impossibleState } from "./posts/avoid-impossible-state-with-typescript/page.mdx";
import impossibleStateCover from "./posts/avoid-impossible-state-with-typescript/cover.jpeg";
import { meta as perfectTeammate } from "./posts/be-the-perfect-teammate/page.mdx";
import perfectTeammateCover from "./posts/be-the-perfect-teammate/cover.jpg";
import { meta as themes } from "./posts/themes-using-css-variables-and-react-context/page.mdx";
import themesCover from "./posts/themes-using-css-variables-and-react-context/cover.png";
import { meta as ci } from "./posts/continuous-integration-with-github-actions-and-puppeteer/page.mdx";
import { meta as guardedCity } from "./posts/guarded-city-with-no-defensive-wall-typescript/page.mdx";
import guardedCityCover from "./posts/guarded-city-with-no-defensive-wall-typescript/cover.jpg";
import { PostSchema } from "@/types/Post";
import { z } from "zod";
import { PostPreview } from "../components/post-preview";

const PostsSchema = z.array(PostSchema);

export default function Home() {
  const posts = PostsSchema.parse([
    { ...linting, cover: lintingCover },
    jestSnapshots,
    { ...buildingABlog, cover: blogCover },
    { ...impossibleState, cover: impossibleStateCover },
    { ...perfectTeammate, cover: perfectTeammateCover },
    { ...themes, cover: themesCover },
    { ...ci },
    { ...guardedCity, cover: guardedCityCover },
  ]).sort((first, second) => (first.date > second.date ? -1 : 1));

  return (
    <>
      <section className="flex flex-col sm:flex-row items-center w-full gap-8 pb-12 px-4 sm:px-8 sm:max-w-3xl">
        <Image
          src={profilePic}
          alt="The author"
          width={200}
          height={200}
          className="rounded-[100%]"
          priority
        ></Image>

        <div className="flex flex-col justify-between gap-8">
          <p>
            I&apos;m <strong>Dor Shinar</strong>. I am a Software Engineer from
            Israel 🇮🇱.
            <br />
            <br />I have a passion for web development and I focus on React. I
            also love TypeScript and testing.
          </p>

          <address className="flex w-full flex-row justify-start gap-2">
            <Link
              href={`https://github.com/dorshinar`}
              aria-label={"Github"}
              className="focus-within:text-emerald-500 hover:text-emerald-500"
            >
              <GithubIcon />
            </Link>
            <Link
              href={`https://twitter.com/DorShinar`}
              aria-label={"Twitter"}
              className="focus-within:text-emerald-500 hover:text-emerald-500"
            >
              <TwitterIcon />
            </Link>
          </address>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-4 sm:px-8 sm:max-w-3xl pb-8">
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} cover={post.cover} />
        ))}
      </section>
    </>
  );
}
