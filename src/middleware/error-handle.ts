import type { Context, Next } from 'koa'
import process from 'node:process'
import { logger } from '../log'

interface CError extends Error {
  status?: number
}

/**
 * 错误处理
 * 想拿到err.cause 需要nodejs>=16
 */
async function errorHandle(ctx: Context, next: Next) {
  return next().catch((err: CError) => {
    if (typeof err === 'object') {
      ctx.body = {
        code: err.status || 500,
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

    // 保证返回状态是 200
    ctx.status = 200

    logger.error(err)

    if (process.env.NODE_ENV === 'dev') {
      console.error(err)
    }

    return Promise.resolve()
  })
}

export default errorHandle
