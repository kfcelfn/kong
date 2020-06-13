import * as type from './assembly';

const routes = [
  { path: '/404', component: type.Error },
  { path: '/login', component: type.Login },
  { 
    path: '/', 
    component: type.LRwrap,
    children: [
      { path: '/error', component: type.Error, },
      { path: '/home', component: type.Home, },
      { path: '/echart', component: type.Echarts, },
      { path: '/list', component: type.List, },
    ]
  },
]

export default routes
