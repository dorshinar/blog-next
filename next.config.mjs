import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
};

const withMDX = mdx({
  options: {
    extension: /\.mdx?$/,
  },
  extension: /\.mdx?$/,
});
export default withMDX(nextConfig);
