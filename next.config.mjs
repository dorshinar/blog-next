import mdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: { rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] },
});
export default withMDX(nextConfig);
