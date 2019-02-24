const _ = require('koa-route');
const Koa = require('koa');
const app = new Koa();

function health(ctx) {
  ctx.body = 'ok';
}

function ping(ctx) {
  ctx.body = 'pong';
}

app.use(_.get('/health', health));
app.use(_.get('/ping', ping));

app.listen(3000, () => {
  console.log('listening on port 3000');
});
