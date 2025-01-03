// route/index.ts
import Router from 'koa-router'
// import openRouter from './open'
// import privateRouter from './private'
// import publicRouter from './public'
import testRouter from './test'

const router = new Router({
  prefix: '',
})

router.use('/test', testRouter.routes(), testRouter.allowedMethods())

export default router
