import loadable from '@/utils/loadable.js'

export const Error = loadable(() => import('@/pages/404'));
export const Login = loadable(() => import('@/pages/login'));
export const LRwrap = loadable(() => import('@/layout/LRwrap'));
export const Home = loadable(() => import('@/pages/home'));
export const Echarts = loadable(() => import('@/pages/echarts'));
export const List = loadable(() => import('@/pages/list'));
export const Demo = loadable(() => import('@/pages/demo'));
