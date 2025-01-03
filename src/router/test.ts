import { createReadStream, readFile, readFileSync } from 'node:fs'
import path from 'node:path'
import { isTypedArray } from 'node:util/types'
import { send } from '@koa/send'
import Router from 'koa-router'

const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = {
    content: 'test get success',
    params: ctx.query,
  }
})

router.get('/err', async (ctx) => {
  ctx.throw(500, 'test Error get')
})

router.post('/', async (ctx) => {
  ctx.body = {
    content: 'test post success',
    data: ctx.request.body,
  }
})

router.post('/file', async (ctx) => {
  const buffer = readFileSync(path.resolve(__dirname, '../assets/卸货数据导入模板.xlsx'))
  ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  const fileName = encodeURIComponent('卸货数据导入模板.xlsx') // 你可以根据需要动态生成文件名
  ctx.set('Content-Disposition', fileName)

  ctx.body = buffer
})

export default router
