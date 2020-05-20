import React from 'react'
import loadable from '@/utils/loadable.js'

const Error = loadable( () => import('@/pages/404') );

export {
  Error,
}