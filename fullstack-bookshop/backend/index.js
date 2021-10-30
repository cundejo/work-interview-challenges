const database = require('./database');
const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'));

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.post('/book/:bookId', (async (request, reply) => {
  const bookId = request.params.bookId;
  const {favorite} = request.body;
  return database.saveFavoriteBook(bookId, favorite);
}))

fastify.get('/book/:bookId', (async (request, reply) => {
  const bookId = request.params.bookId;
  return database.getFavoriteBook(bookId);
}))

// Run the server!
const start = async () => {
  try {
    await fastify.listen(5000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
