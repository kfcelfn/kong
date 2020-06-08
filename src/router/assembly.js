import loadable from '@/utils/loadable.js'

const Error = loadable( () => import('@/pages/404') );
const Hook = loadable( () => import('@/pages/hook') );

export {
  Error,
  Hook
}