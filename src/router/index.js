import * as type from './assembly';

const routes = [
  { path: '/404', component: type.Error },
  { path: '/login', component: type.Login },
  { path: '/', component: type.Home },
]

export default routes
