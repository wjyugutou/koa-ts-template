import type { Context, Next } from 'koa'

async function responseHandle(ctx: Context, next: Next) {
  await next()

  ctx.body = {
    code: 200,
    msg: 'success',
    data: ctx.body,
  }
}
export default responseHandle
