import loadable from '@/utils/loadable.js'

/**
 * layout
*/
const Basic = loadable(() => import('@/layout/Basic'));
const BasicHome = loadable(() => import('@/pages/home'));

const Pinterest = loadable(() => import('@/pages/pinterest'));
const Error = loadable(() => import('@/pages/404'));

export {
  Error,
  Basic,
  BasicHome,
  Pinterest,
}