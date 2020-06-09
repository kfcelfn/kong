import * as type from './assembly';

const routes = [
  { path: '/404', component: type.Error },
  { path: '/hook', component: type.Hook },
  { path: '/effect', component: type.Effects },
  { path: '/redux', component: type.Redux },
]

export default routes
