import type { Context, Next } from 'koa'
import { logger } from '../log'

/**
 * 错误处理
 * 想拿到err.cause 需要nodejs>=16
 */
async function errorHandle(ctx: Context, next: Next) {
  return next().catch((err: { cause: { code: number }, message: string }) => {
    if (typeof err === 'object') {
      ctx.body = {
        code: err.cause?.code || 500,
        data: null,
        message: err.message,
      }
    }
    else {
      ctx.body = {
        code: 500,
        data: null,
        message: err,
      }
    }

    logger.error(err)

    // 保证返回状态是 200
    ctx.status = 200

    return Promise.resolve()
  })
}

export default errorHandle
