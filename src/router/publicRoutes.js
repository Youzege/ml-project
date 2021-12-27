const publicRoutes = [
  {
    path: '/',
    component: () => import('@/layout/index'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import('@/views/Welcome/index')
      }
    ]
  }
]

export default publicRoutes
