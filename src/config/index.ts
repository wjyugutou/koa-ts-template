// 导入process
import process from 'node:process'
// 导入dotenv
import { config } from 'dotenv'

// 得到dotenv的内容
config()

export const isDev = process.env.NODE_ENV === 'dev'

// 导出env的环境变量
export default process.env
