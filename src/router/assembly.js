import loadable from '@/utils/loadable.js'

const Error = loadable(() => import('@/pages/404'));
const Hook = loadable(() => import('@/pages/hook'));
const Effects = loadable(() => import('@/pages/effect'));
const Redux = loadable(() => import('@/pages/getReduxData'));

export {
  Error,
  Hook,
  Effects,
  Redux,
}