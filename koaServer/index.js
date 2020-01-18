/*
 * @Author: aneng
 * @Date: 2018-12-28 15:06:39
 * @Last Modified by: aneng
 * @Last Modified time: 2020-01-13 20:48:59
 */

const Koa = require('koa');

const app = new Koa();

const compose = require('koa-compose');

const bodyParser = require('koa-bodyparser');

const router = require('./routes');

const middlewareHandler = require('./middleware');


const middlewares = compose([middlewareHandler]);

app.use(middlewares);
app.use(bodyParser());
app.use(async (ctx, next) => {
    await next();
});
app.use(router.allowedMethods());
app.use(router.routes());

app.listen(7779);
