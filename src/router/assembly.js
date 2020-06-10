import loadable from '@/utils/loadable.js'

const Error = loadable(() => import('@/pages/404'));
const Login = loadable(() => import('@/pages/login'));
const Home = loadable(() => import('@/pages/home'));

export {
  Error,
  Login,
  Home,
}