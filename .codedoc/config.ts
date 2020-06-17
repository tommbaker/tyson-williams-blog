
import { configuration } from '@codedoc/core';
import { codingBlog } from '@codedoc/coding-blog-plugin';

import { theme } from './theme';



export const config = /*#__PURE__*/configuration({
  theme,
  src: {
    base: 'src/markdown'
  },
  dest: {
    namespace: '',    // --> change this if you want to also deploy to GitHub Pages
    html: 'dist',
    assets: 'src',
    bundle: 'bundle',
    styles: 'styles',
  },
  page: {
    title: {
      base: ''
    },
    favicon: 'favicon.ico',
    meta: {
      subject: 'Blog of Tyson Williams',
      description: 'Blog by Tyson Williams about software development and functional programming',
      keywords: ['software', 'development', 'functional', 'programming', 'Tyson', 'Williams'],
    },
  },
  plugins: [
    codingBlog({
      assets: [
        'src/images',
        'src/favicon.ico',
      ]
    })
  ],
  misc: {
    github: {
      repo: 'coding-blog-boilerplate',
      user: 'CONNECT-platform'
    }
  }
});
