import type { HeadConfig } from 'vitepress';

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = '../logo.svg'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

export const head: HeadConfig[] = [

  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: ogTitle }],
  ['meta', { property: 'og:image', content: ogImage }],
  ['meta', { property: 'og:url', content: ogUrl }],
  ['meta', { property: 'og:description', content: ogDescription }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@vite_js' }],
  ['meta', { name: 'theme-color', content: '#646cff' }],
  // ['meta', { name: 'theme-color', src: '/web/fontawesome/css/all.css' }],
  // ['meta', { name: 'theme-color', src: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css' }],
  ['script', { type: 'text/javascript', src: "/jianyan/js/jweixin-1.6.0.js" }],
  ['script', { type: 'text/javascript', src: "/jianyan/js/uni.webview.1.5.4.js" }]
]
