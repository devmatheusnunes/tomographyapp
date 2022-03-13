const routes = [
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [ 
      { path: '', component: () => import('pages/Auth.vue') },
    ]},
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: '', component: () => import('pages/MenuIndex.vue') },
      { path: 'introduction', component: () => import('pages/Introduction.vue') },
      { path: 'form', component: () => import('pages/Form.vue') },
      { path: 'cutscreen', component: () => import('pages/CutScreen.vue') },
      { path: 'selector', component: () => import('pages/Selector.vue') },
      { path: 'cut-result', component: () => import('pages/CutResult.vue') },
      { path: 'video-screen', component: () => import('pages/VideoScreen.vue') },
      { path: 'video-result', component: () => import('pages/VideoResult.vue') },
      { path: 'history', component: () => import('pages/History.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'evaluate', component: () => import('pages/Evaluate.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
