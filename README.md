### koa设置响应头

response.header
响应标头对象。

response.headers
响应标头对象。别名是 response.header。

ctx.set 是 ctx.response.set 的别名，功能完全一致，但更简洁，推荐使用。
```javascript
ctx.set('Content-Type', 'application/json')
```
