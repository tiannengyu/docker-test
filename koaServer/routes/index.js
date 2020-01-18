const router = require('koa-router')();
const fs = require('fs');

router
    .get('/', (ctx) => {
        console.log(ctx);
        console.log(1111);
        ctx.body = 'hello koa';
    });
module.exports = router;
