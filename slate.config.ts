/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://localhost:4321',
  avatar: '/avatar.png',
  title: 'Simple Blog',
  description: 'Pure Code, Simple View.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Authorized Personnel',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/offensive-vk/my-simple-blog'
    },
]
});