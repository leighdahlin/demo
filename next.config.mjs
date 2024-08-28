/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://leigh-dahlin-demo.netlify.app/*'],
  },
    webpack: (cfg) => {
        cfg.module.rules.push({
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] },
        });
        return cfg;
      },
};

export default nextConfig;
