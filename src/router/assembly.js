import loadable from '@/utils/loadable.js'

export const Error = loadable(() => import('@/pages/404'));
export const Hook = loadable(() => import('@/pages/hook'));
export const Effects = loadable(() => import('@/pages/effect'));
export const Redux = loadable(() => import('@/pages/getReduxData'));
export const Demo = loadable(() => import('@/pages/demo'));
