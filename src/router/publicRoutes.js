import echartsRoutes from './echartsRoutes'
import leafletRoutes from './leafletRoutes'
const publicRoutes = [
  {
    path: '/',
    component: () => import('@/layout/index'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        meta: {
          navName: '首页'
        },
        component: () => import('@/views/Welcome/index')
      }
    ]
  },
  ...leafletRoutes,
  ...echartsRoutes
]

export default publicRoutes
