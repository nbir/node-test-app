# node-test-app

A node test app

## Usage
- `npm i` to install dependencies
- `node index.js` to run server

## API Reference

### `/health`

Response:

```
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8

ok
```

e.g.

```
curl --request GET http://localhost:3000/health
ok
```

### `/ping`

Response:

```
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8

pong
```

e.g.

```
curl --request GET http://localhost:3000/ping
pong
```