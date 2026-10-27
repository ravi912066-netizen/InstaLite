
const app = require('./server');
const prisma = require('./db');

const port = 3000;

async function startServer() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    console.log('✅ Database connection successful');

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error('❌ Database connection failed');
    console.error(error);

    await prisma.$disconnect();
    process.exitCode = 1;
  }
}

startServer();
