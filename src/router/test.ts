import Router from 'koa-router'

const router = new Router({
})

router.get('/basic', async (ctx) => {
  ctx.body = {
    name: 'zhangsan',
  }
})

router.get('/err', async () => {
  throw new Error('error-testErr', {
    cause: {
      code: 500,
    },
  })
})

export default router
