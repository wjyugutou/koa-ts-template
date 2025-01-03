import type { Context, Next } from 'koa'

async function responseHandle(ctx: Context, next: Next) {
  await next()

  if (ctx.body === undefined) {
    ctx.throw(404, 'not found')
  }
  else if (ctx.get('Content-Type') === 'application/json') {
    ctx.body = {
      code: 200,
      msg: 'success',
      data: ctx.body,
    }
  }
}
export default responseHandle
