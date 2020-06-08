import loadable from '@/utils/loadable.js'

const Error = loadable( () => import('@/pages/404') );
const Home = loadable( () => import('@/pages/home') );

export {
  Error,
  Home,
}