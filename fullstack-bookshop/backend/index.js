const database = require('./database');
const fastify = require('fastify')();

fastify.register(require('fastify-cors'));

fastify.post('/book/:bookId', async (request, reply) => {
  const { favorite } = request.body;
  return database.saveFavoriteBook(request.params.bookId, favorite);
});

fastify.get('/book/:bookId', async (request, reply) => {
  const favoriteObject = await database.getFavoriteBook(request.params.bookId);
  if (!favoriteObject) return reply.callNotFound();
  return favoriteObject;
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
